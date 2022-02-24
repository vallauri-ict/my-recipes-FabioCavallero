import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IngredientModel } from 'src/app/models/ingredient.model';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  constructor(public recipeService: RecipeService, private activatedRoute:ActivatedRoute, private router:Router) { }
  recipeName:string="";
  recipeDescription:string="";
  recipeImagePath:string="";
  recipeIngredients:string="";
  buttonText:string="";
  editMode:string=""; //X il salvataggio
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params:Params) =>{
        if(params['id'])
        {
          //Edit mode
          if(this.recipeService.selectedRecipe)
          {
            this.recipeName= this.recipeService.selectedRecipe.name;
            this.recipeDescription= this.recipeService.selectedRecipe.description;
            this.recipeIngredients= "";
            for (let ingredient of this.recipeService.selectedRecipe.ingredients) {
              this.recipeIngredients += ingredient.name + ":"+ ingredient.amount+ "\n";
            }
            if(this.recipeService.selectedRecipe.ingredients.length>0)
            {
              this.recipeIngredients= this.recipeIngredients.substring(0,this.recipeIngredients.length-1);
            }
          }
          this.editMode="edit";
          this.buttonText="Save changes";
        }
        else
        {
          //Add mode
          this.editMode="add";
          this.buttonText="Add new recipe";
        }
      }
    )  
  }
  onSave(){
    let ingredients = this.manageIngredients(this.recipeIngredients);
    let recipe:RecipeModel= new RecipeModel(this.recipeName, this.recipeDescription, this.recipeImagePath, ingredients)
    if(this.editMode=="add")
    {
      //this.recipeService.postRecipe(recipe);
    }
    else
    {
      //this.recipeService.patchRecipe(this.recipeService.selectedRecipe.id,recipe);
    }
    alert("Recipe saved");
    this.router.navigate(['/recipes']);
  }
  manageIngredients(ingredients:string){
    let retVal=[];
    let items=ingredients.split("\n");
    for (const item of items) {
      let aus=item.split(":");
      let ingredient=new IngredientModel(aus[0],parseInt(aus[1]));
      retVal.push(ingredient);
    }
    return retVal;
  }
}