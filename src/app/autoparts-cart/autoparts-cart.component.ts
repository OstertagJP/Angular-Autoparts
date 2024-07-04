import { Component } from '@angular/core';
import { AutopartCartService } from '../autopart-cart.service';
import { Autopart } from '../autoparts-list/Autopart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-autoparts-cart',
  templateUrl: './autoparts-cart.component.html',
  styleUrl: './autoparts-cart.component.scss'
})
export class AutopartsCartComponent {

  //Aca vamos a hacer un Observable de Autopart, una convencion es poner un signo $ al final
  //Para entender que es un Observable y no es el dato real
  cartList$: Observable<Autopart[]>; 

  constructor(private cart: AutopartCartService){
    this.cartList$ = cart.cartList.asObservable();
  }
}
