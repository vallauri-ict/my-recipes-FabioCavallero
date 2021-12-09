import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedInList = new EventEmitter<RecipeModel>()
  recipes:RecipeModel[]=[
    new RecipeModel(
      'Spaghetti alla chitarra',
      'Un particolare tipo di pasta che ...',
      'https://images.lacucinaitaliana.it/wp-content/uploads/2020/06/03204258/Pasta-alla-chitarra-con-ragu-di-polo.jpg'
    ),
    new RecipeModel(
      'Lasagne alla bolognese',
      'Pasta emiliana molto calorica sempre presente nei pranzi domenicali ...',
      'https://www.tribugolosa.com/uploads/media/lasagne-alla-bolognese-hem1.jpg?1389133420'
    ),
    new RecipeModel(
      'Ravioles al Formaggio',
      'Ottimi soprattutto in Val Varaita nella variante Ravioles...',
      'https://media-cdn.tripadvisor.com/media/photo-s/14/b1/37/d3/ravioles-della-valle.jpg'
    ),
    new RecipeModel(
      'Tiramisù',
      'Classico dolce italiano con mascarpone ...',
      'https://toscanedigusto.com/wp-content/uploads/2019/09/maxresdefault.jpg'
    )
  ]
  selectedRecipe:RecipeModel
  constructor() {
    this.selectedRecipe=this.recipes[0]
   }
  ngOnInit(): void {}
  onRecipeSelected(recipe:RecipeModel){
    this.recipeSelectedInList.emit(recipe);
  }
}