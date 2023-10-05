import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
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

  ngOnInit(): void {
    // to add
  }

}
