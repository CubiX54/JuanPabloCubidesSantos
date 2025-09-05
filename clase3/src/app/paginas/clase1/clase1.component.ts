import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clase1',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './clase1.component.html',
  styleUrls: ['./clase1.component.css']
})
export class Clase1Component {
  titulo: string = 'Lista de Compras';   
  nuevoTitulo: string = '';              
  cambiarTitulo() {
    if (this.nuevoTitulo.trim() !== '') {
      this.titulo = this.nuevoTitulo;
      this.nuevoTitulo = ''; 
    }
  }
}
