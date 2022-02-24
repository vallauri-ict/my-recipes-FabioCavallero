import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  constructor(public recipeService:RecipeService, private shoppingList:ShoppingListService, private activatedRoute:ActivatedRoute, private router: Router) { }
  ngOnInit(): void { 
    this.activatedRoute.params.subscribe((params:Params)=>{
      let recipeId=params['id'];
      this.recipeService.getRecipe(recipeId);
    }
  )
  //Soluzione alternativa
  /*let recipeId= this.activatedRoute.snapshot.paramMap.get("id");
  this.recipeService.getRecipe(recipeId);*/
}
  sendToShoppingList=():void=>{
    this.shoppingList.addIngredients(this.recipeService.selectedRecipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.activatedRoute});
  }
}