import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { SelectedDirective } from './shared/directives/selected.directive';
import { PannierContainerComponent } from './pannier-container/pannier-container.component';
import { IngredientListComponent } from './pannier-container/ingredient-list/ingredient-list.component';
import { APP_ROUTES } from './app.routes';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    SelectedDirective,
    PannierContainerComponent,
    IngredientListComponent,
    CocktailFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
