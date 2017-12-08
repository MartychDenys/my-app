import { Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";
import { Subject } from "rxjs/Subject";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Schnitzel',
      'A super testy schnitzel - just awesome',
      'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('French Fries', 20),
        new Ingredient('Piece of lime', 2)
      ]),
    new Recipe('Burger',
      'Very big and testy burger',
      'http://www.tellusaboutus.com/comments/images/BK-WebComment/BB_WHOPPER-v1.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Tomatoes', 4),
        new Ingredient('Cheese', 2)
      ]),
    new Recipe('Pizza',
      'Pizza with cheese - perfect',
      'https://trashmyroommatessay.files.wordpress.com/2017/07/pizza-2341377_1920.jpg?w=878',
    [
      new Ingredient('Cheese', 3),
      new Ingredient('Tomatoes', 15)
    ]
    )
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    console.log(newRecipe);
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
}
