import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    // La sintaxis standalone usa 'loadComponent' en lugar de 'loadChildren'
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'todo',
    loadComponent: () => import('./todo/todo.page').then(m => m.TodoPage),
  },
];