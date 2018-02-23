import { Component,   OnInit, OnDestroy, ViewChild    } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../Services/shopping-list.service';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  editMode = false;
    editItemIndex: number;
    ingredient: Ingredient;
    @ViewChild('f') form: NgForm;

  constructor(private shoppingListService: ShoppingListService,  private store: Store<{shoppingList: {

    ingredients: Ingredient[]  }}>) { }

  ngOnInit() {
    this.subscription =  this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.ingredient = this.shoppingListService.getIngredient(index);
        this.form.setValue({
            name : this.ingredient.name,
            amount: this.ingredient.amount
        });
        // console.log(index);
      }
    );
  }

  onDelete() {
    console.log(this.editItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient(this.editItemIndex));
  this.onClear();
}
  onClear() { this.form.reset();
  this.editMode = false;
}
ngOnDestroy() {
this.subscription.unsubscribe();
}

addIngredient(form: NgForm) {
  const value = form.value;
 const newIngredient =  new Ingredient(value.name, value.amount);
  if (this.editMode) {
 // this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
 this.store.dispatch(new ShoppingListActions.UpdateIngredient( { index: this.editItemIndex, ingredient: newIngredient}));
  } else {
   // this.shoppingListService.addIngredient(newIngredient);
 this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
  }
}
}
