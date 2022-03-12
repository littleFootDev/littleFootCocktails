import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { Cocktail } from '../../../../shared/interface/cocktail.interface';
import {Ingredient } from '../../../../shared/interface/ingredient.interface'
import {PanierService} from '../../../../shared/services/panier.service'

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail! : Cocktail;
  public index! : number;
  

  constructor(
    private panierService: PanierService,
    private cocktailService: CocktailService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params : Params) => {
      if(params['get']('index')) {
        this.index = params['get']('index');
      }
     
      this.cocktailService.getCocktail(this.index).subscribe((cocktail : Cocktail) => {
      this.cocktail = cocktail;
      });
    })
  };

  public addToPanier (ingredients: Ingredient[]): void {
    this.panierService.addIngredients(ingredients);
  }
  public getUrl() {
    return['/cocktails', this.index, 'edit']
  }
}
