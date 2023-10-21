import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is only a test!',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/08/19/WU3203-ree-drummond-crispy-everything-chicken-cutlets_4x3.jpg.rend.hgtvcom.616.462.suffix/1660928170362.jpeg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is also only a test!',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/08/19/WU3203-ree-drummond-crispy-everything-chicken-cutlets_4x3.jpg.rend.hgtvcom.616.462.suffix/1660928170362.jpeg'
    ),
    new Recipe(
      'Yet Another Test Recipe',
      'This is too only a test!',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/08/19/WU3203-ree-drummond-crispy-everything-chicken-cutlets_4x3.jpg.rend.hgtvcom.616.462.suffix/1660928170362.jpeg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
