import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Just a test', 'https://img.buzzfeed.com/buzzfeed-static/static/2018-01/3/14/enhanced/buzzfeed-prod-fastlane-03/original-9497-1515007001-5.jpg'),
    new Recipe('A test recipe', 'Just a test', 'https://img.buzzfeed.com/buzzfeed-static/static/2018-01/3/14/enhanced/buzzfeed-prod-fastlane-03/original-9497-1515007001-5.jpg'),
    new Recipe('A test recipe', 'Just a test', 'https://img.buzzfeed.com/buzzfeed-static/static/2018-01/3/14/enhanced/buzzfeed-prod-fastlane-03/original-9497-1515007001-5.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
