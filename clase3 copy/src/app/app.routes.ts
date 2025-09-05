import { Routes } from '@angular/router';
import { Clase1Component } from './Clase1/clase1.component';
import { Clase2Component } from './Clase2/clase2.component';
import { Clase3Component } from './clase3/clase3.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';

export const routes: Routes = [
  { path: 'clase1', component: Clase1Component },
  { path: 'clase2', component: Clase2Component },
  { path: 'clase3', component: Clase3Component },
  { path: '**', component: NotFoundComponent }
];
