// src/app/home/home.page.ts (Verifica o actualiza este archivo)

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // 🔑 Necesario para usar routerLink

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
  // Asegúrate de que RouterModule esté listado aquí para que routerLink funcione
  imports: [IonicModule, CommonModule, RouterModule], 
  
  standalone: true
})
export class HomePage {
  constructor() {}
}