import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnChanges {
  @Input() productos: any[] = [];
  @Input() categoriaSeleccionada: string = 'all'; 
  @Output() agregarProducto = new EventEmitter<any>();

  // Esta propiedad guardará los productos filtrados
  productosFiltrados: any[] = [];

  ngOnChanges(): void {
    if (this.productos && this.productos.length > 0) {
      this.aplicarFiltro();
    }
  }
  
  aplicarFiltro(): void {
    if (this.categoriaSeleccionada === 'all') {
      this.productosFiltrados = this.productos;
    } else {
      this.productosFiltrados = this.productos.filter(producto => 
        producto.category.toLowerCase() === this.categoriaSeleccionada.toLowerCase()
      );
    }
  }

  agregarAlCarrito(producto: any) {
    this.agregarProducto.emit(producto);
  }
}