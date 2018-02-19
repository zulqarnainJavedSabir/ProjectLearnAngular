import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../Services/recipe.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }
  ngOnInit() {
    this.subscription =
     this.recipeService.recipeSelected.subscribe(
  (recipe: Recipe) => this.selectedRecipe = recipe
);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
