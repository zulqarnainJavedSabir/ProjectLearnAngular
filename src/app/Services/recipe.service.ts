import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';


@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
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
    new Ingredient('chicken', 500)])

  ];
  constructor(private shoppingListService: ShoppingListService) { }
  getRecipes() {
return this.recipes.slice();
  }
  addRecipes(recipe: Recipe) {
this.recipes.push(recipe);
  }
  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
