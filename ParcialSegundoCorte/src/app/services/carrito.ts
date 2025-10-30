import { Injectable } from '@angular/core';
import { Producto } from './productos'; 

interface Compra { 
  date: string;
  productos: Producto[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService { 
  private carrito: Producto[] = [];

  constructor() {
    this.cargarCarrito();
  }

  addToCart(producto: Producto) {
    this.carrito.push(producto);
    this.guardarCarrito();
  }

  getCart(): Producto[] {
    return this.carrito;
  }

  getCartTotal(): number {
    return this.carrito.reduce((total, producto) => total + producto.price, 0);
  }

  clearCart() {
    this.carrito = [];
    this.guardarCarrito();
  }

  completePurchase(userEmail: string) {
    const compra: Compra = {
      date: new Date().toISOString(),
      productos: [...this.carrito], 
      total: this.getCartTotal()
    };

    const compras = this.getCompras(userEmail);
    compras.push(compra);
    
    localStorage.setItem(`compras_${userEmail}`, JSON.stringify(compras)); 
        
    this.clearCart();
  }

  getCompras(userEmail: string): Compra[] {
    const compras = localStorage.getItem(`compras_${userEmail}`);
    return compras ? JSON.parse(compras) : [];
  }

  private guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  private cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
    }
  }
}