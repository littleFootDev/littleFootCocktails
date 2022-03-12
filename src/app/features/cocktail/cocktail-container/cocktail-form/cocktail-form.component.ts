import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {first} from 'rxjs/operators';

import { Cocktail } from '../../../../shared/interface/cocktail.interface';
import { CocktailService } from '../../../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss']
})
export class CocktailFormComponent implements OnInit {
  public cocktail!: Cocktail;
  public cocktailForm!: FormGroup;
  

  public get ingredients() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailService,
    private router : Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index');
      if(index !== null) {
        this.cocktailService.getCocktail(+index).pipe(first()).subscribe((cocktail : Cocktail) => {
          this.cocktail = cocktail;
          this.initForm(this.cocktail)
        }); 
      } else  {
        this.initForm()
      }
    });
  }

  private initForm(cocktail = { name: '', image: '', description: '', ingredients: [] }): void{
    this.cocktailForm = this.fb.group({
      name: [cocktail.name, Validators.required],
      image: [cocktail.image, Validators.required],
      description: [cocktail.description],
      ingredients: this.fb.array(
        cocktail.ingredients.map((ingredient) =>
          this.fb.group({
            name: [ingredient.name, Validators.required],
            quantity: [ingredient.quantity, Validators.required],
          })
        )
      ),
    });
  }

  public addIngredient(): void {
    this.ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: [0, Validators.required]
      })
    );
  }

  public submit() : void {
    if(this.cocktail) {
      this.cocktailService.editCocktail(this.cocktail._id, this.cocktailForm.value).subscribe()
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value).subscribe()
    }
    this.router.navigate(['...'], {relativeTo: this.activatedRoute});
  }
  
}
