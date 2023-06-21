import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from './chuck-norris.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'chuck-norris-app';

  categories: string[] = [];
  newCategory: string = "";

  constructor(private chuckNorrisService: ChuckNorrisService) {}


  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.chuckNorrisService.getCategories().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        console.log('Error:', error);
      })
  }

createCategory() {
  if (this.newCategory) {
    this.categories.push(this.newCategory);
    this.newCategory = '';
  }
}

updateCategory(index: number) {
  const newCategory = prompt('Ingrese la nueva categoría');
  if (newCategory) {
    this.categories[index] = newCategory;
  }
}

deleteCategory(index: number) {
  this.categories.splice(index, 1);
}
}
