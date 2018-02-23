import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import * as ShoppingListAction from '../shopping-list/store/shopping-list.actions';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  recipeChanges = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Lasagne',
    'Italian',
     'https://torange.biz/photo/6/6050/6050-FX-6-0-12-6-8-0.jpg',
    [new Ingredient('pasta', 100),
    new Ingredient('cheese', 1000),
    new Ingredient('chicken', 500)]),
    new Recipe('Shwarma',
     'Hyderabadi',
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
      [new Ingredient('Roti', 2),
      new Ingredient('cheese', 10),
      new Ingredient('chicken', 500)]),
    new Recipe('Biryani', 'Hyderabadi', 'https://static.pexels.com/photos/556558/pexels-photo-556558.jpeg',
    [new Ingredient('Rice', 5000),
    new Ingredient('curd', 100),
    new Ingredient('chicken', 500)]),
    new Recipe('Haleem', 'Hyderabadi',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Haleem_hyderabadi.jpg/800px-Haleem_hyderabadi.jpg',
     [new Ingredient('Oats', 5000),
    new Ingredient('curd', 100),
    new Ingredient('chicken', 500)])

  ];
  constructor( private store: Store<{shoppingList:
    { ingredients: Ingredient[]  }}>) { }
 setRecipes(recipes: Recipe[]) {
   this.recipes = recipes;
   this.recipeChanges.next(this.recipes.slice());
 }
  getRecipes() {
return this.recipes.slice();
  }
  addRecipes(recipe: Recipe) {
this.recipes.push(recipe);
this.recipeChanges.next(this.recipes.slice());
}
  addToShoppingList(ingredients: Ingredient[]) {
   this.store.dispatch(new ShoppingListAction.AddIngredients(ingredients));

  }
  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanges.next(this.recipes.slice());
  }
getRecipe(index: number) {
  return this.recipes.slice()[index];
}
removeRecipe(index: number) {
  this.recipes.splice(index, 1);
  this.recipeChanges.next(this.recipes.slice());
}
}
