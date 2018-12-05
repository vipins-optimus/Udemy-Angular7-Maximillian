import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@Output() ingredientAdded = new EventEmitter<Ingredient>();
	@ViewChild('nameInput') nameInputRef: ElementRef;
	@ViewChild('amountInput') amountInputRef: ElementRef;

	constructor() { }

	ngOnInit() {
	}

	onAddItem() {
		const ingName = this.nameInputRef.nativeElement.value;
		const ingAmount = this.amountInputRef.nativeElement.value;
		const newIngredient = new Ingredient(ingName, ingAmount);
		this.ingredientAdded.emit(newIngredient);
	}

}
