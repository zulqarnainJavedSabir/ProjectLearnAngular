import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RecipeService } from '../Services/recipe.service';
import {Recipe} from '../recipes/recipe.model';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
     private recipeService: RecipeService,
    private authService: AuthService) {
   }
storeRecipe() {
  const token: string = this.authService.getToken();
return this.httpClient.put('https://my-first-project-6adf0.firebaseio.com/recipes.json?auth=' + token,
this.recipeService.getRecipes());
}

RetrieveRecipe() {
  const token: string = this.authService.getToken();
  return this.httpClient.get<Recipe[]>('https://my-first-project-6adf0.firebaseio.com/recipes.json?auth=' + token)
  .map(
    (recipes) => {
      for (const recipe of recipes) {
        if (!recipe['ingredients']) {
          recipe['ingredients'] = [];
        }
      }
      return recipes;
    }).subscribe((recipes: Recipe[]) => {
    this.recipeService.setRecipes(recipes);
  });
}
}
