import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipes.service';
import { Recipe } from './recipe.model';

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

  constructor(private recipeService: RecipeService, 
              private router: Router,
              private route: ActivatedRoute) {

   }

  ngOnInit() {

  this.recipes = this.recipeService.getRecipes();

  }

  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
