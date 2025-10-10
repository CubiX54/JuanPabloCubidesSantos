// src/app/test-components/test-components.page.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Módulo Angular básico
import { FormsModule } from '@angular/forms'; // Necesario para formularios
import { IonicModule } from '@ionic/angular'; // ¡LA CLAVE para los componentes ion-xxx!

@Component({
  selector: 'app-test-components',
  templateUrl: './test-components.page.html',
  styleUrls: ['./test-components.page.scss'],
  
  // 🔑 Configuración Standalone: Importa los módulos directamente.
  imports: [IonicModule, CommonModule, FormsModule], 
  
  standalone: true // Indica que este es un componente independiente
})
export class TestComponentsPage {
  
  // ==================================
  // PROPIEDADES (VARIABLES)
  // ==================================
  
  // Inicializa la barra de progreso al 50%
  public progresoActual: number = 0.5; 
  
  // Mensaje inicial del botón
  public mensajeBoton: string = 'Haz clic para avanzar'; 


  // MÉTODOS (FUNCIONES)
 
  constructor() {}

  /**
   * Incrementa la barra de progreso en un 10% (.10) y actualiza el texto del botón.
   */
  public avanzarProgreso(): void {
    // Incrementa el progreso y asegura que no supere 1.0 (100%).
    this.progresoActual = Math.min(1.0, this.progresoActual + 0.10);
    
    // Actualiza el mensaje
    if (this.progresoActual < 1.0) {
      this.mensajeBoton = `Progreso: ${(this.progresoActual * 100).toFixed(0)}%`; 
    } else {
      this.mensajeBoton = '¡Completado! 🎉';
    }
  }

}