import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { Cocktail } from '../../../../shared/interface/cocktail.interface';
import { CocktailService } from '../../../../shared/services/cocktail.service';
import { PanierService } from '../../../../shared/services/panier.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail?: Cocktail;
  

  constructor(
    private panierService: PanierService,
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const cocktailIndex = paramMap.get('index')
      if (cocktailIndex) {
        this.cocktailService.getCocktail(+cocktailIndex).subscribe((cocktail: Cocktail) => { 
          this.cocktail =  cocktail
        })
        
      }
      
    });
  }


  public addToPanier(): void {
    this.panierService.addToPanier(this.cocktail!.ingredients);
  }

  
}
