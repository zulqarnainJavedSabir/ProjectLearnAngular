import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs/Subject';


@Injectable()
export class ShoppingListService {

private ingredientList: Ingredient[] =  [
  new Ingredient( 'Apples' , 5),
  new Ingredient('Tomatoes' , 10)
];

changedIngredients = new Subject<Ingredient[]>();

startedEditing = new Subject<number>();
  constructor() { }

addIngredient(ingredient: Ingredient) {
this.ingredientList.push(ingredient);
this.changedIngredients.next(this.ingredientList.slice());
}

getIngredient(index: number): Ingredient  {
  return this.ingredientList[index];
}

getIngredientList() {
  return this.ingredientList.slice();
}

updateIngredient(index: number, ingredient: Ingredient) {
  this.ingredientList[index] = ingredient;
  this.changedIngredients.next(this.ingredientList.slice());
}



}
