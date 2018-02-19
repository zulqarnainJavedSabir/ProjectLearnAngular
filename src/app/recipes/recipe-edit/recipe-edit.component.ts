import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { FormGroup, FormControl,
   ReactiveFormsModule, FormArray, Validators
   } from '@angular/forms';
import { RecipeService } from '../../Services/recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
form: FormGroup;
ingredients = new FormArray([]);
recipe: Recipe;

  constructor(private route: ActivatedRoute,
     private recipeService: RecipeService,
     private router: Router
    ) { }
id: number;
editMode = false;


  ngOnInit() {
    this.route.params
    .subscribe(
(params: Params) => {
this.id = +params['id'];
this.editMode = params['id'] != null;
console.log(this.editMode);
});

if (this.editMode) {
  this.getCurrentSelectedRecipe(true);
  } else {
    this.getCurrentSelectedRecipe(false);
  }
  }

 private getCurrentSelectedRecipe(state: boolean) {

  let recipeName = '';
  let recipeDescription = '';
  let recipeImage = '';


  if (state) {
    this.recipe  = this.recipeService.getRecipe(this.id);
    recipeName = this.recipe.name;
    recipeDescription = this.recipe.description;
    recipeImage = this.recipe.imagePath;

    if (this.recipe['ingredients']) {
      for (const ingredient of this.recipe.ingredients) {
      this.ingredients.push(
        new FormGroup({
          name: new FormControl( ingredient.name, Validators.required),
          amount: new FormControl( ingredient.amount, Validators.required)
        }));
      }
        }
  }


 this.form = new FormGroup({
name: new FormControl(recipeName, Validators.required),
description: new FormControl(recipeDescription, Validators.required),
imagePath: new FormControl(recipeImage, Validators.required),
ingredients: this.ingredients
 });
  }

  onSave() {
    console.log(this.form);
if (this.editMode) {
 this.recipeService.updateRecipe(this.id, this.form.value);
} else {
   this.recipeService.addRecipes(this.form.value);
}
this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddIngredients() {
    (<FormArray> this.form.get('ingredients')).push(
      new FormGroup(
        {name: new FormControl(null, Validators.required),
           amount: new FormControl(null, Validators.required)})
    );
  }

  onDeleteRecipe() {
    if (this.editMode) {
      this.recipeService.removeRecipe(this.id);
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }
  onDeleteIngredient(index: number) {
    (<FormArray> this.form.get('ingredients')).removeAt(index);
  }
}
