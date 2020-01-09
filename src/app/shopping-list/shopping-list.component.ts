import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // ingredients:  Ingredient = [
  //   new Ingredient('Apple', 5),
  //   new Ingredient('Orange', 10),
  // ];
  // public ingredients: any=[];
  public ingredients: any;

  constructor(private slService: ShoppinglistService) {
    // this.ingredients.push(new Ingredient('Apple', 5));
    // this.ingredients.push(new Ingredient('Orange', 5));
  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

}
