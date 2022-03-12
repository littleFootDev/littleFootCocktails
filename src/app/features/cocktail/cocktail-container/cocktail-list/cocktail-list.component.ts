import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../../../../shared/interface/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails: Cocktail[] | null = null;
  public search = '';
  
  constructor() { }
 
  ngOnInit(): void {
  }
  
  public selectCocktail(index: number): void {
  }

}
