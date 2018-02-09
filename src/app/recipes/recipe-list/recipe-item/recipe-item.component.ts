import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../Services/recipe.service';




@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe: Recipe;
 @Output() clickedRecipe = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) { }
  recipeClicked() {
    this.recipeService.recipeSelected.emit(this.recipe);
  // this.clickedRecipe.emit();
  }
  ngOnInit() {
  }

}
