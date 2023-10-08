import { EventEmitter } from './recipe.model';

import { Recipe } from './recipe.model';

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe [] = [
    new Recipe('A test recipe', 'simply a test', 'https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg'),
    new Recipe('Another test recipe', 'simply a test', 'https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg')
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
