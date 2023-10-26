import { Component, OnDestroy, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})


export class RecipeListComponent implements OnInit, OnDestroy{

  recipes: Recipe [] = [];
  subscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.subscription =  this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe(){
this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy(): void {
this.subscription.unsubscribe();
  }
  }
// As of Angular 8+, there's a new way of clearing all items in a FormArray.

// (<FormArray>this.recipeForm.get('ingredients')).clear();
// The clear() method automatically loops through all registered FormControls (or FormGroups) in the FormArray and removes them.

// It's like manually creating a loop and calling removeAt() for every item.

