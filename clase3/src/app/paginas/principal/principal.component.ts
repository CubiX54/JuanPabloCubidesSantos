import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']  // ✅ entre corchetes (array)

})
export class PrincipalComponent {
num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  miSuma(){
    this.resultado = this.num1 + this.num2;
  }
}
