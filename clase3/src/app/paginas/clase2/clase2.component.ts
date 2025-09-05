import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clase2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './clase2.component.html',
  styleUrls: ['./clase2.component.css']
})
export class Clase2Component {
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
