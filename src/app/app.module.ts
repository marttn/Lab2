import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeDetailsComponent} from './recipes/recipe-details/recipe-details.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {RecipesComponent} from './recipes/recipes.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FilterPipe} from './filter.pipe';
import {SortPipe} from './sort.pipe';

const appRoutes: Routes =
  [
    {path: 'recipes', component: RecipesComponent},
    // {path: 'recipes', component: RecipeStartComponent},
    {path: 'recipes/add', component: RecipeEditComponent},
    {path: 'recipes/:id', component: RecipeDetailsComponent},
    {path: 'recipes/:id/edit', component: RecipeEditComponent},
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  ];
@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule, RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ), ReactiveFormsModule, FormsModule, Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
