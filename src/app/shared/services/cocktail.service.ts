import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {filter, map } from 'rxjs/operators';
import { Cocktail } from '../interface/cocktail.interface';
import { Ingredient } from '../interface/ingredient.interface';

@Injectable()
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[] | []> = new BehaviorSubject<Cocktail[] | []>([]);

  constructor(private http: HttpClient) {
    this.cocktailsInit();
  }

  cocktailsInit(): void {
    this.http
      .get('https://cocktails-63318.firebaseio.com/cocktails.json')
      .subscribe((cocktails: Cocktail[]) => {
        this.cocktails$.next(cocktails);
      });
  }

  getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails$.pipe(
      filter((cocktails) => cocktails != null),
      map((cocktails) => cocktails[index])
    );
  }

  addCocktail(cocktail: Cocktail) {
    const cocktails = this.cocktails$.value;
    cocktails.push({
      name: cocktail.name,
      imgage: cocktail.imgage,
      description: cocktail.description,
      ingredients: cocktail.ingredients,
    });
    this.cocktails$.next(cocktails);
  }

  editCocktail(editCocktail: Cocktail): void {
    const cocktails = this.cocktails$.value.slice();
    const index = cocktails.map((c) => c.name).indexOf(editCocktail.name);
    cocktails[index] = editCocktail;
    this.cocktails$.next(cocktails);
    this.save();
  }

  save(): void {
    this.http
      .put(
        'https://cocktails-63318.firebaseio.com/cocktails.json',
        this.cocktails$.value
      )
      .subscribe((res) => console.log(res));
  }
}
