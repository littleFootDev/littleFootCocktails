import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class CocktailDetailsComponent implements OnInit, OnDestroy {
  public cocktail!: Cocktail;
  public subscription!: Subscription;

  constructor(
    private panierService: PanierService,
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.subscription = this.cocktailService
        .getCocktail(+paramMap.get('index'))
        .subscribe((cocktail: Cocktail) => {
          this.cocktail = cocktail;
        });
    });
  }

  public addToPanier(): void {
    this.panierService.addToPanier(this.cocktail.ingredients);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
