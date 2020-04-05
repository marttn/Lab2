import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeDetailsComponent} from './recipes/recipe-details/recipe-details.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {RecipesComponent} from './recipes/recipes.component';
import {ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeListComponent},
      {path: ':id', component: RecipeDetailsComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeEditComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ), ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
