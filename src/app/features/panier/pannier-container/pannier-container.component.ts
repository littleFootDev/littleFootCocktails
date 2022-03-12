import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../../shared/interface/ingredient.interface';
import { PanierService } from '../../../shared/services/panier.service';

@Component({
  selector: 'app-pannier-container',
  templateUrl: './pannier-container.component.html',
  styleUrls: ['./pannier-container.component.scss']
})
export class PannierContainerComponent implements OnInit, OnDestroy {

  public ingredients: Ingredient[] | null= null;
  public subscription: Subscription = new Subscription();
  
  constructor(private panierService: PanierService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.panierService.ingredients$.subscribe(
        ingredients => (this.ingredients = ingredients)
      )
    );
    
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
