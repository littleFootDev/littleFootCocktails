import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SelectedDirective } from './shared/directives/selected.directive';
import { APP_ROUTES } from './app.routes';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { CocktailModule } from './features/cocktail/cocktail.module';
import { PanierModule } from './features/panier/panier.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectedDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    CocktailModule,
    PanierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
