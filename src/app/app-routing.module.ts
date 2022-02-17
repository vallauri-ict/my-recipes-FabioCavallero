import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
const appRoutes: Routes= [
  {
    path:'',
    redirectTo:'/recipes',
    pathMatch:'full'
  },
  {
    path:'recipes', //senza /
    component:RecipesComponent,
    children: [
      {path:':id', component: RecipeDetailComponent}
    ]
  },
  {
    path:'shopping-list',
    component:ShoppingListComponent
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(appRoutes)]
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }