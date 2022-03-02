import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../interface/cocktail.interface';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Morito',
      img:'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375',
      description: 'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.'
    },
    {
      name: 'Mai Tai',
      img:'https://www.hangoverweekends.co.uk/media/15506/mm-cocktail-guide-maitai-590x375.jpg?width=434px&height=276px',
      description: 'The Mai Tai is a Polynesian-style cocktail that has a fruity tropical taste sweet and vibrant. The mixture of light and dark rum, orange curacao, orgeat syrup and lime juice has been a symbol of Tahitian culture ever since the drink was first created.'
    },
    {
      name: 'Mint Julep',
      img:'https://www.hangoverweekends.co.uk/media/15504/bulleitmintjulep_l.jpg?width=300&height=300',
      description: 'The concoction of Bourbon, a little bit of water, powdered and granulated sugar and plenty of mint has long been a very popular way to drink a cocktail. Simple yet refined.'
    }
  ]);

  public selectedCocktail$ : BehaviorSubject<Cocktail> = new BehaviorSubject(
    this.cocktails$.value[0]
  );
  public selectCocktail(index: number): void {
    this.selectedCocktail$.next(this.cocktails$.value[index]);
  }
  constructor() { }
}
