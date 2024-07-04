import { Component } from '@angular/core';
import { Autopart } from './Autopart';
import { AutopartCartService } from '../autopart-cart.service';
import { AutopartDataService } from '../autopart-data.service';

@Component({
  selector: 'app-autoparts-list',
  templateUrl: './autoparts-list.component.html',
  styleUrl: './autoparts-list.component.scss'
})
export class AutopartsListComponent {

  autoparts : Autopart[] = [];
 
  constructor(
    private cart: AutopartCartService,
    private autopartsDataService: AutopartDataService) {
  }

  //Este metodo se dispara cuando el componente entra en pantalla, entonces en este punto consumimos la API
  ngOnInit(): void {
    this.autopartsDataService.getAll()  //Usamos el servicio, que nos devuelve un Observable
      .subscribe(autoparts => this.autoparts = autoparts);  //aca nos suscribimos 
     //y guardamos lo que nos devuelve en el arreglo autoparts que despues mostramos
  }
  
  addToCart(autopart: Autopart): void {
    this.cart.addToCart(autopart);
    autopart.stock -= autopart.quantity;
    autopart.quantity = 0;
  }

  maxReached(m: string){
    alert(m);
  }
}
