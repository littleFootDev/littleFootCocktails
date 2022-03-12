import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
