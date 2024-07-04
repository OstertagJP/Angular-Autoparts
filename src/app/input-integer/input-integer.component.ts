import { ChangeDetectorRef, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  constructor(private cdr: ChangeDetectorRef) {}

  @Input()
  quantity!: number;
  
  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();
 
  
  //Funciones para incrementar y decrementar las unidades de compra
  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else  
      this.maxReached.emit("Se alcanzo el MAX");
    this.cdr.detectChanges();   // Forzar la detección de cambios
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
    this.cdr.detectChanges();   // Forzar la detección de cambios
  }

  //Funcion para controlar el valor de quantity, que este entre 0 y max
  validateAndUpdateQuantity(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = parseInt(input.value, 10);
    if (isNaN(value) || value < 0) {
      value = 0;
    } else if (value > this.max) {
      value = this.max;
      this.quantityChange.emit(this.quantity);
    }
    this.quantity = value;
    this.quantityChange.emit(this.quantity);
    this.cdr.detectChanges();   // Forzar la detección de cambios
  }

  //Mejora del rendimiento, con esta funcion se identifica que elemento del DOM se modifico o hay que modificar
 
}
