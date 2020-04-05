import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../recipe';
import {GetRecipesService} from '../../get-recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  title = 'recipe list';
  recipes: Recipe[] = [];
  constructor(private recipesService: GetRecipesService) { }

  private getRecipes() {
    this.recipesService.getAllRecipes().subscribe(
      data => {
      this.recipes = data;
    });
  }
  ngOnInit(): void {
    setTimeout(() => this.getRecipes(), 100);
  }

  updateRecipe(r: Recipe) {

  }

  deleteRecipe(r: Recipe) {

  }

  onSelect(r: Recipe) {

  }
}
