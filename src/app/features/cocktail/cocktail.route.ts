import { RouterModule, Routes } from "@angular/router";


//Component
import { CocktailContainerComponent } from "./cocktail-container/cocktail-container.component";
import { CocktailDetailsComponent } from "./cocktail-container/cocktail-details/cocktail-details.component";
import { CocktailFormComponent } from "./cocktail-container/cocktail-form/cocktail-form.component";


const COCKTAIL_ROUTES: Routes = [
    {
        path: 'cocktails',
        component: CocktailContainerComponent,
        children : [
           {
               path: 'new',
               component : CocktailFormComponent
           },
           { 
               path: ':index/edit',
               component: CocktailFormComponent
           },
           { 
               path: ':index',
               component:CocktailDetailsComponent
           },
           { 
               path : '',
               component: CocktailDetailsComponent,
           } 
        ]
    },
];


export const cocktailRouting = RouterModule.forChild(COCKTAIL_ROUTES)