import { RouterModule, Routes,  } from "@angular/router";


const APP_ROUTES: Routes = [
    { 
        path: '',
        redirectTo: 'cocktails',
        pathMatch: 'full',
    },
    {
        path: 'panier',
        loadChildren: () => import('./features/panier/panier.module').then( m => m.PanierModule)
    }
    
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES, {relativeLinkResolution : 'legacy'}); 