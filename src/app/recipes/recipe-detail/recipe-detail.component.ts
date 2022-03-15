import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngbd-modal-confirm',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Profile deletion</h4>
    <button type="button" class="btn-close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')"></button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete the recipe?</strong></p>
    <p>All information associated to this recipe will be permanently deleted.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
  </div>
  `
})
export class NgbdModalConfirm {
  constructor(public modal: NgbActiveModal) {}
}
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(
    public recipeService: RecipeService,
    private shoppingList: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _modalService:NgbModal
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        // console.log(params);
        let recipeId = params['id'];
        this.recipeService.getRecipe(recipeId);
      }
    )
    // Sintassi alternativa
    // let recipeId = this.activatedRoute.snapshot.paramMap.get("id");
    // this.recipeService.getRecipe(recipeId);
  }

  sendToShoppingList = (): void => {
    this.shoppingList.addIngredients(this.recipeService.selectedRecipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }
  onDeleteRecipe() {
      if(confirm("Are you sure to delete recipe "+this.recipeService.selectedRecipe.name+"?")) {
        this.recipeService.deleteRecipe(this.recipeService.selectedRecipe.id);    }
        this._modalService.open(NgbdModalConfirm);
  }
}