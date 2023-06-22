import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private bookService: BookService) {
    this.bookForm = this.formBuilder.group({
      image: ['', Validators.required],
      name: ['', Validators.required],
      editorial: ['', Validators.required],
      gender: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.bookForm.invalid) {
      return;
    }

    const book: Book = {
      id: 0,
      image: this.bookForm.value.image,
      name: this.bookForm.value.name,
      editorial: this.bookForm.value.editorial,
      gender: this.bookForm.value.gender,
      author: this.bookForm.value.author
    };

    this.bookService.createBook(book).subscribe(createdBook => {
      console.log('Libro creado:', createdBook);
      this.bookForm.reset();
    });
  }
}
