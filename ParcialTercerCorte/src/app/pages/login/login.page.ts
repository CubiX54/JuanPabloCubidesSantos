import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,

  imports: [CommonModule, FormsModule, IonicModule, RouterModule, RouterLink] 
})
export class LoginPage {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  login() {
    this.isLoading = true;
    this.apiService.login({ 
      email: this.email, 
      password: this.password 
    }).subscribe({
      next: (response) => {
        this.isLoading = false;
        localStorage.setItem('token', response.token); 
        this.router.navigate(['/feed']);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error de login:', error);
        alert('Credenciales incorrectas. (Error 401: Unauthorized)');
      }
    });
  }
}