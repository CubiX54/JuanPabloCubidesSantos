import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';

export const routes: Routes = [
  { path: '', redirectTo: 'car', pathMatch: 'full' },
  { path: 'car', component: ProductosComponent },
  { path: 'carrito', component: CarritoComponent }
];