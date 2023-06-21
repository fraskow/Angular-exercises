import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from './chuck-norris.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'chuck-norris-app';

  categories: any[] = [];
  newCategory: string ="";

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
    this.chuckNorrisService.createCategory(this.newCategory).subscribe(
      (response) => {
        console.log('Categoría creada:', response);
        this.loadCategories();
        this.newCategory = ''; // Limpiar el campo de entrada después de la creación
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  updateCategory(oldCategory: string, newCategory: string) {
    this.chuckNorrisService.updateCategory(oldCategory, newCategory).subscribe(
      (response) => {
        console.log('Categoría actualizada:', response);
        this.loadCategories();
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  deleteCategory(category: string) {
    this.chuckNorrisService.deleteCategory(category).subscribe(
      (response) => {
        console.log('Categoría eliminada:', response);
        this.loadCategories();
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
