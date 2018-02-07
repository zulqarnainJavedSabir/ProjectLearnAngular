import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeEmitter = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('Lasagne', 'Italian', 'https://torange.biz/photo/6/6050/6050-FX-6-0-12-6-8-0.jpg'),
  new Recipe('Shwarma', 'Hyderabadi', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg')
];
RecipeSelected(recipe: Recipe) {
  this.recipeEmitter.emit(recipe);
}
  constructor() { }

  ngOnInit() {
      }

}
