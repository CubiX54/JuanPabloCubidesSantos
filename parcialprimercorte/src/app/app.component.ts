// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EncabezadoComponent, ProductosComponent, CarritoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  productos: any[] = [];
  productosEnCarrito: any[] = [];
  categoriaSeleccionada: string = 'all';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Al iniciar, obtenemos la categoría del local
    const savedCategory = localStorage.getItem('categoria');
    if (savedCategory) {
      this.categoriaSeleccionada = savedCategory;
    }

    this.http.get<any[]>('https://fakestoreapi.com/products')
      .subscribe(data => {
        this.productos = data;
      });
  }

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
    // Guardamos la categoría en el local
    localStorage.setItem('categoria', categoria);
  }

  agregarAlCarrito(producto: any) {
    this.productosEnCarrito.push(producto);
  }

  eliminarDelCarrito(producto: any) {
    this.productosEnCarrito = this.productosEnCarrito.filter(p => p.id !== producto.id);
  }

  calcularTotal(): number {
    return this.productosEnCarrito.reduce((total, p) => total + p.price, 0);
  }
}