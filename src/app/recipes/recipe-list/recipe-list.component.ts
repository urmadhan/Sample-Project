import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[]; 
//   =[
// new Recipe('A Paneer Recipe', 'This is a test Paneer Recipe', 'assets/photos/image.jpg'),
// new Recipe('A Burger Recipe', 'This is a test Burger Recipe', 'assets/photos/image bur.jpg'),
// new Recipe('A Sandwitch Recipe', 'This is a test Sandwitch Recipe', 'assets/photos/image sand.jpg')
//   ];

  constructor(private recipeService: RecipeService) {

   }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

  }

  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }
}
