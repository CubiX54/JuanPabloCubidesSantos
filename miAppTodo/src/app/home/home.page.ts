import { Component } from '@angular/core';
import { Router } from '@angular/router';
// Importamos los componentes Ionic que se usan en el template HTML
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // 👈 Clave para Standalone: indica que este componente no necesita un NgModule
  standalone: true, 
  // 👈 Importamos los módulos necesarios para que el componente funcione
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonLabel] 
})
export class HomePage {

  // Inyectamos el Router para manejar la navegación
  constructor(private router: Router) {} 

  /**
   * Navega a la ruta '/todo'.
   * Se llama al hacer clic en el botón "Agregar Tarea".
   */
  goToTodoPage() {
    this.router.navigate(['/todo']); 
    console.log('Navegando a la página To-Do');
  }

}