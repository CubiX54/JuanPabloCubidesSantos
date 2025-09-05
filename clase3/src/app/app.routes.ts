import { Routes } from '@angular/router';
import { MenuComponent } from './paginas/menu/menu.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { Clase1Component } from './paginas/clase1/clase1.component';
import { Clase2Component } from './paginas/clase2/clase2.component';


export const routes: Routes = [
  { path: '', component: MenuComponent },          
  { path: 'principal', component: PrincipalComponent }, 
  { path: 'clase1', component: Clase1Component },
  { path: 'clase2', component: Clase2Component },
  { path: '**', redirectTo: '' }
];
