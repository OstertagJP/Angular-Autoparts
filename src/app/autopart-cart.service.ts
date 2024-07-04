import { Injectable } from '@angular/core';
import { Autopart } from './autoparts-list/Autopart';
import { BehaviorSubject } from 'rxjs';

/**
 * Maneja la logica del carrito
 */
@Injectable({
  providedIn: 'root'
})
export class AutopartCartService {

  //Se crea otra variable Private con un _ (guion bajo antes, es parte de un estandar)
  private _cartList: Autopart[] = [];  
  //Se encapsula el cartList en un BehaviorSubject para poder "suscribirnos" a sus cambios
  //Y que nos avise cuando éste cambia, CREO QUE QUEDO SIN USO PORQUE SE CAMBIO LA LOGICA  
  cartList: BehaviorSubject<Autopart[]> = new BehaviorSubject<Autopart[]>([]);
  constructor() { }

  addToCart(autopart: Autopart) {
    //Como el find() de un array puede devolver undefined, la variable item puede que sea undefined, 
    //por eso se lo agrego despues de declararlo como Autopart 
    let item: Autopart | undefined = this._cartList.find((v1) => v1.article == autopart.article);
    if (!item){
      this._cartList.push({... autopart});
    }
    else {
      item.quantity += autopart.quantity;
    }
    console.log(this._cartList);
    //Ahora informo que hubo un cambio, entonces "emito" ese mensaje
    //Se hace con el next, entre parentesis le paso el nuevo valor que tiene (la variable private)
    //Equivalente al "emit" de eventos 
    this.cartList.next(this._cartList);
  }
}
