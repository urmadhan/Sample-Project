import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  // recipe: Recipe;
  // id: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.id = +params['id']
    //     this.recipe = this.recipeService.getRecipe(this.id);
    //   }
    // )
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  } 
}
