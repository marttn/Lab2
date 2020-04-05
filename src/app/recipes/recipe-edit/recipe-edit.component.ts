import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../../recipe';
import {GetRecipesService} from '../../get-recipes.service';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeEditForm;
  newForm = false;

  constructor(public  recipeService: GetRecipesService, public route: ActivatedRoute, public router: Router) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      this.newForm = params.get('id') === undefined;
      this.editMode = params.get('id') != null;
      this.initialization();
    });
  }

  initialization() {
    let name = ``;
    let category = ``;
    let shortDesc = ``;
    let longDesc = ``;
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipe.subscribe(res => {
        name = res.name;
        category = res.category;
        shortDesc = res.shortDesc;
        longDesc = res.longDesc;
      });
    }

    this.recipeEditForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      category: new FormControl(category, Validators.required),
      shortDesc: new FormControl(shortDesc, Validators.required),
      longDesc: new FormControl(longDesc, Validators.required),
    });
  }

  onSubmit() {

    const newRecipe = new Recipe();
    newRecipe.name = this.recipeEditForm.name;
    newRecipe.category = this.recipeEditForm.category;
    newRecipe.shortDesc = this.recipeEditForm.shortDesc;
    newRecipe.longDesc = this.recipeEditForm.longDesc;
    newRecipe.createdDate = this.recipeEditForm.shortDesc;
    if (!this.newForm) {
      this.recipeService.updateRecipe(this.id, newRecipe);
      this.router.navigate(['/recipes']);
    } else {
      this.recipeService.getAllRecipes().subscribe(res => res.length);
      this.recipeService.createRecipe(newRecipe);
      this.router.navigate(['/recipes']);
    }
  }

  onCancel() {
    this.router.navigate(['/recipes']);
  }
}
