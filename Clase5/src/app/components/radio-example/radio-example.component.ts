import { Component } from '@angular/core';
import { 
  IonItem, 
  IonList, 
  IonRadio, 
  IonRadioGroup 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-radio-example',
  templateUrl: './radio-example.component.html',
  styleUrls: ['./radio-example.component.scss'],
  standalone: true,
  imports: [
    IonItem, 
    IonList, 
    IonRadio, 
    IonRadioGroup
  ],
})
export class RadioExampleComponent {
  selectedAlignment: string = '';

  constructor() {}

  // Método para capturar el cambio de selección
  onRadioChange(event: any) {
    this.selectedAlignment = event.detail.value;
    console.log('Seleccionado:', this.selectedAlignment);
  }
}