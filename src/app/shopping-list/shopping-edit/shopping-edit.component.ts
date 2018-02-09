import { Component,
   OnInit,
   ViewChild,
   ElementRef
    } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../Services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameRef: ElementRef;
@ViewChild('amountInput') amountRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }
  addIngredient() {
    this.shoppingListService.addIngredient(new Ingredient(
      this.nameRef.nativeElement.value,
      this.amountRef.nativeElement.value
    ));
  }
  ngOnInit() {
  }

}
