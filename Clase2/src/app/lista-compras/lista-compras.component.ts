import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent {
  inputValue: string = '';
  tareas: string[] = [];

  agregarTarea() {
    if (this.inputValue.trim() === '') return;
    this.tareas.push(this.inputValue);
    this.inputValue = '';
  }

  eliminarTarea() {
    if (this.tareas.length > 0) {
      this.tareas.shift();
    }
  }
}