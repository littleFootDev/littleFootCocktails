import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PanierService } from './shared/services/panier.service';
import { CocktailModule } from './features/cocktail/cocktail.module';
import { SharedModule } from './shared/modules/shared.module';
import { AppRouting } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CocktailModule,
    SharedModule,
    AppRouting,
   
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
