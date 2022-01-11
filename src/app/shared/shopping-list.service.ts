import { Injectable } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
import { DataStorageService } from './data-storage.service';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients: IngredientModel[] = [];
  constructor(private dataStorageService:DataStorageService) { }
  getIngredients(){
    this.dataStorageService.sendGetRequest("shopping-list")
    .subscribe(data=>{

      this.ingredients = data as IngredientModel[];
    },
    error=> {
      console.error(error);
    })
  }
  addIngredient(ingredient:IngredientModel){
    let ingredientFound = false;
    for (const item of this.ingredients) {
      if(item.name.toLowerCase() == ingredient.name.toLowerCase())
      {
        ingredientFound = true;
        item.amount += ingredient.amount;
        this.patchIngredient({amount: item.amount,id: 0,name: ''},item.id);
        break;
      }
    }
    if(!ingredientFound)
    {
      this.ingredients.push(ingredient);
      this.postIngredient(ingredient);
    }
  }
  addIngredients(ingredients:IngredientModel[]){
    this.ingredients.push(...ingredients);
  }
  postIngredient(ingredient:IngredientModel){
    this.dataStorageService.sendPostRequest('shopping-list',ingredient)
    .subscribe(data=>{
      console.log(data);
    },
    error=> {
      console.error(error);
    });
  }
  patchIngredient(ingredient:IngredientModel,id:number){
    this.dataStorageService.sendPatchRequest('shopping-list/' + id,ingredient)
    .subscribe(data=>{
      console.log(data);
    },
    error=> {
      console.error(error);
    });
  }
}