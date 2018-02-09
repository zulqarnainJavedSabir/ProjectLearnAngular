import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {  } from '@angular/core/src/event_emitter';


@Injectable()
export class ShoppingListService {
private ingredientList: Ingredient[] =  [
  new Ingredient( 'Apples' , 5),
  new Ingredient('Tomatoes' , 10)
];
changedIngredients = new EventEmitter<Ingredient[]>();
  constructor() { }
addIngredient(ingredient: Ingredient) {
this.ingredientList.push(ingredient);
this.changedIngredients.emit(this.ingredientList.slice());
}
getIngredientList() {
  return this.ingredientList.slice();
}
addIngredients(ingredients: Ingredient[]) {
this.ingredientList.push(...ingredients);
this.changedIngredients.emit(this.ingredientList.slice());

}
}
