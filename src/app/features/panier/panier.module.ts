import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PannierContainerComponent } from "./pannier-container/pannier-container.component";
import { IngredientListComponent } from "./pannier-container/ingredient-list/ingredient-list.component";

import { PANIER_ROUTE } from "./PANIER_ROUTE";



@NgModule({
  declarations: [
    PannierContainerComponent,
    IngredientListComponent],
  imports: [
    CommonModule,
    
    RouterModule.forChild(PANIER_ROUTE)
  ]
})
export class PanierModule {}