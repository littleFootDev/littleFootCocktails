import { Component } from '@angular/core';
import { CocktailService } from '../../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
  providers: [CocktailService]
})
export class CocktailContainerComponent {
  
}
