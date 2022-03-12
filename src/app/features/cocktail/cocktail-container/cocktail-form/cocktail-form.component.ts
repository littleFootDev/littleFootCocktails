import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
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
  public edit! : boolean;

  public get ingredients() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: Params) => {
      if (params['get']('index')) {
        this.edit = true;
        this.cocktailService.getCocktail(params['get']('index')).subscribe((cocktail: Cocktail) =>{
          this.cocktail = cocktail;
          this.initForm(this.cocktail)
        });
      } else {
        this.edit = false;
        this.initForm();
      }
    });
  }

  initForm(cocktail = { name: '', image: '', description: '', ingredients: [] }) {
    this.cocktailForm = this.fb.group({
      name: [cocktail.name, Validators.required],
      image: [cocktail.image, Validators.required],
      description: [cocktail.description],
      ingredients: this.fb.array(
        cocktail.ingredients.map((ingredient) =>
          this.fb.group({
            name: [ingredient.name],
            quantity: [ingredient.quantity],
          })
        )
      ),
    });
  }

  public addIngredient(): void {
    this.ingredients.push(
      this.fb.group({
        name: ['',],
        quantity: [0,]
      })
    );
  }

  public createCcocktail(): void {
    if(this.edit) {
      this.cocktailService.editCocktail(this.cocktailForm.value);
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value)
    }
  }
}
