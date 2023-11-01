

import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService {

recipesChanged = new Subject<Recipe[]>();
  // private recipes: Recipe [] = [

  //   new Recipe('A test recipe', 'simply a test',
  //   'https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
  //    [
  //     new Ingredient('Meat', 1),
  //     new Ingredient('French Fries', 20)
  // ]),
  //   new Recipe('Another test recipe', 'simply a test', 'https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
  //   [
  //     new Ingredient('mozarella', 1),
  //   new Ingredient('cheese', 20)])
  // ];
private recipes: Recipe [];

  constructor(private slService: ShoppingListService){}

setRecipes(recipes: Recipe[]){
  this.recipes = recipes;
  this.recipesChanged.next(this.recipes.slice());
}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes.slice() [index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe){
this.recipes.push(recipe);
this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipes(index: number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
