import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para trabajar con inputs/formularios si usáramos ngModel
// Importamos los componentes de Ionic usados en el HTML de esta página
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonLabel
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
  // 1. Convertimos la página a standalone:
  standalone: true,
  // 2. Importamos los módulos y componentes que usaremos:
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonItem,
    IonInput,
    IonButton,
    IonList,
    IonLabel
  ]
})
export class TodoPage implements OnInit {

  // Lista para almacenar las tareas, inicialmente vacía.
  todoList: string[] = [];

  constructor() { }

  ngOnInit() {
    // Puedes inicializar la lista con datos si quisieras, pero la dejaremos vacía.
  }

  /**
   * Función para agregar una nueva tarea a la lista.
   * @param task La tarea a agregar (texto del input).
   */
  addTask(task: string | null | undefined) {
    // 1. Verificar que el texto no esté vacío o sea solo espacios
    const trimmedTask = (task || '').trim();

    if (trimmedTask.length > 0) {
      // 2. Agregar la tarea a la lista
      this.todoList.push(trimmedTask);
      console.log('Tarea agregada:', trimmedTask);
    }
    // Si la tarea está vacía, simplemente no hacemos nada.
  }
}