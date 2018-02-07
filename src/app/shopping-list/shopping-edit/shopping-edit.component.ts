import { Component,
   OnInit,
   ViewChild,
   Output,
   ElementRef,
   EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';




@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameRef: ElementRef;
@ViewChild('amountInput') amountRef: ElementRef;
@Output() ingredientEmitter = new EventEmitter<Ingredient>();
  constructor() { }
  addIngredient() {
this.ingredientEmitter.emit(new Ingredient(
  this.nameRef.nativeElement.value,
  this.amountRef.nativeElement.value
));
  }
  ngOnInit() {
  }

}
