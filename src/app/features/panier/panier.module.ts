import { NgModule } from "@angular/core";
import { PannierContainerComponent } from "./pannier-container/pannier-container.component";
import { IngredientListComponent } from "./pannier-container/ingredient-list/ingredient-list.component";
import { RouterModule } from "@angular/router";
import { PANIER_ROUTE } from "./PANIER_ROUTE";
import { SharedModule } from "src/app/shared/modules/shared.module";


@NgModule({
  declarations: [
    PannierContainerComponent,
    IngredientListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(PANIER_ROUTE)
  ]
})
export class PanierModule {}