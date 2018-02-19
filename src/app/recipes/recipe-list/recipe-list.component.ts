import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../Services/recipe.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

recipes: Recipe[] = [];
private subscription: Subscription;
  constructor(private recipeService: RecipeService,
    private router: Router,
  private route: ActivatedRoute) { }
  onNewRecipe() {
this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnInit() {
    this.recipes  = this.recipeService.getRecipes();
   this.subscription =  this.recipeService.recipeChanges.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
      }
      ngOnDestroy() {
        this.subscription.unsubscribe();
      }

}
