import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'iniciar-sesion',
    pathMatch: 'full',
  },
  {
    path: 'iniciar-sesion',
    loadComponent: () => import('./paginas/iniciar-sesion/iniciar-sesion.page').then(m => m.IniciarSesionPage),
  },
  {
    path: 'registro',
    loadComponent: () => import('./paginas/registro/registro.page').then(m => m.RegistroPage),
  },
  {
    path: 'productos',
    loadComponent: () => import('./paginas/productos/productos.page').then(m => m.ProductosPage),
  },
  {
    path: 'carrito',
    loadComponent: () => import('./paginas/carrito/carrito.page').then(m => m.CarritoPage),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./paginas/perfil/perfil.page').then(m => m.PerfilPage),
  },
];