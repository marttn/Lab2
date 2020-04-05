import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Recipe} from './recipe';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRecipesService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/recipes-book';

  getAllRecipes()/*: Observable<Recipe[]>*/ {
    return this.http.get<Recipe[]>(this.url);
  }

  getRecipe(id: number)/*: Observable<Recipe> */{
    return this.http.get<Recipe>(this.url + '/' + id);
  }
  createRecipe(recipe: Recipe)/*: Observable<Recipe>*/ {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<Recipe>(this.url, recipe, httpOptions);
  }
  updateRecipe(id: number, recipe: Recipe)/*: Observable<Recipe> */{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.patch<Recipe>(this.url + '/' + id, recipe, httpOptions);
  }
}
