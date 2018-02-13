import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../../Services/recipe.service';




@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute) {
  }
  onAddToShoppinglist() {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }
  ngOnInit() {
   this.route.params
   .subscribe(
     (param: Params) => {
        this.id = +param['id'];
       this.recipe =  this.recipeService.getRecipe(this.id);
     }
   );
  }

}
