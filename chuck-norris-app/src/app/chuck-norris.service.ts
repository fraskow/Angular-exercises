import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {
  private apiUrl = 'https://api.chucknorris.io/';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}jokes/categories`);
  }

  createCategory(category: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}categories`, { category });
  }

  updateCategory(oldCategory: string, newCategory: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}categories/${oldCategory}`, { category: newCategory });
  }

  deleteCategory(category: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}categories/${category}`);
  }
}
