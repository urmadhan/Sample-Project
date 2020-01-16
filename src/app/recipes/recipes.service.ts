import { Recipe } from './recipe-list/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    // recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Paneer Recipe', 'This is a test Paneer Recipe', 'assets/photos/image.jpg', [
            new Ingredient('Paneer', 50),
            new Ingredient('Sambar', 30)
        ]),
        new Recipe('A Burger Recipe', 'This is a test Burger Recipe', 'assets/photos/image bur.jpg', [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('A Sandwitch Recipe', 'This is a test Sandwitch Recipe', 'assets/photos/image sand.jpg', [
            new Ingredient('Bread', 10),
            new Ingredient('Jam', 15)
        ])
    ];

    constructor(private slService: ShoppinglistService) {

    }
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}