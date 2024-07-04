import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Autopart } from './autoparts-list/Autopart';

const URL= 'https://66832e4d4102471fa4c96250.mockapi.io/autoparts/repuestos'

@Injectable({
  providedIn: 'root'
})
export class AutopartDataService {

  constructor(private http: HttpClient) { }

  //Tengo que tipar que me va a devolver la funcion, en este caso
  // un Observable que esta "mirando" un arreglo de tipo Autopart
  public getAll(): Observable<Autopart[]>{   
                                          
    //como en JS era fetch('url', {method: 'GET'}) en Angular es...
    return this.http.get<Autopart[]>(URL)   //este metodo devuelve un observable de la respuesta
          .pipe(                 //pero antes de devolverlo, lo vamos a modificar, iteramos y ponemos quantity=0
            tap((autoparts: Autopart[]) => autoparts.forEach(autopart => autopart.quantity = 0))
          );  
  }
}
