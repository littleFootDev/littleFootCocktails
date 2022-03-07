import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { Cocktail } from '../../shared/interface/cocktail.interface';
import {PanierService} from '../../shared/services/panier.service'

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail! : Cocktail;
  

  constructor(
    private panierService: PanierService,
    private cocktailService: CocktailService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap : ParamMap) => {
      
      this.cocktail = this.cocktailService.getCocktail(+this.activatedRoute.snapshot.paramMap.get('index')!);
    })
  }
  public addToPanier (): void {
    this.panierService.addToPanier(this.cocktail.ingredients);
  }
}
