import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../interface/ingredient.interface';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public panier : BehaviorSubject<Ingredient[] | []> = new BehaviorSubject<Ingredient[] | []>([]);

  constructor(){};

  public addIngredients(ingredients : Ingredient[]) : void {
    const currentValue = this.panier.value;

    if (currentValue) {
      this.panier.next(currentValue);
    } else {
      this.panier.next(ingredients)
    }
  }
}
