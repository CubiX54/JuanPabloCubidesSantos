import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule, RouterLink } from '@angular/router'; // 👈 Añadir RouterLink
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule, RouterLink]
})
export class RegisterPage {
  name: string = '';
  email: string = '';
  username: string = ''; 
  password: string = '';
  password_confirmation: string = ''; 
  isLoading: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  register() {
    if (this.password !== this.password_confirmation) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    this.isLoading = true;
    const userData = {
      name: this.name,
      email: this.email,
      username: this.username, 
      password: this.password,
      password_confirmation: this.password_confirmation,
    };

    this.apiService.register(userData).subscribe({
      next: (response) => {
        this.isLoading = false;
        alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error de registro:', error);
        alert('Error al registrar. Verifica los datos o si el usuario/email ya existe.'); 
      }
    });
  }
}