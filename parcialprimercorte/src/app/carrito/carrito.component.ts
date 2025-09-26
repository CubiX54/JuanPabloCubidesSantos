import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  @Input() productosEnCarrito: any[] = [];
  @Input() total: number = 0;
  @Output() eliminarProducto = new EventEmitter<any>();
  
  eliminarDelCarrito(producto: any) {
    this.eliminarProducto.emit(producto);
  }
}