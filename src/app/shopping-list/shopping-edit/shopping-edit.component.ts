import { Component,   OnInit, OnDestroy, ViewChild    } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../Services/shopping-list.service';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';


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
  constructor(private shoppingListService: ShoppingListService
    ) { }
  addIngredient(form: NgForm) {
     const value = form.value;
    const newIngredient =  new Ingredient(value.name, value.amount);
     if (this.editMode) {
    this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
     } else {
      this.shoppingListService.addIngredient(newIngredient);
     }
  }
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
ngOnDestroy() {
this.subscription.unsubscribe();
}
}
