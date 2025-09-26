// src/app/encabezado/encabezado.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  
  @Input() cantidadProductos: number = 0;
}