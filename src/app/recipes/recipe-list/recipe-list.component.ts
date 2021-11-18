import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:RecipeModel[]=[
    new RecipeModel(
      "Spaghetti alla chitarra",
      "Un particolare tipo di pasta che...",
      "https://blog.cookaround.com/lamimosarosa/spaghetti-alla-chitarra-con-pomodorini/"
    ),
    new RecipeModel(
      "Lasagne alla bolognese",
      "La pasta dei froci",
      "https://www.latuadietapersonalizzata.it/2019/08/26/lasagna-alla-bolognese-ricetta/"
    ),
    new RecipeModel(
      "Gnocchi al formaggio",
      "La pasta dei neri",
      "https://ricette.giallozafferano.it/Gnocchi-della-Val-Varaita.html"
    ),
    new RecipeModel(
      "Tiramisu",
      "Classico dolce italiano con panna e mascarpone...",
      "https://www.buttalapasta.it/wp-content/uploads/2012/04/ricetta-tiramisu-classico.jpg"
    )
  ];
  selectedRecipe: RecipeModel;
  constructor() { 
    this.selectedRecipe=this.recipes[0];
  }
  ngOnInit(): void {
  }
}