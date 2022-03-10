import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PannierContainerComponent } from "./pannier-container/pannier-container.component";
import { IngredientListComponent } from "./pannier-container/ingredient-list/ingredient-list.component";


@NgModule({
  declarations: [
    PannierContainerComponent,
    IngredientListComponent],
  imports: [CommonModule]
})
export class PanierModule {}