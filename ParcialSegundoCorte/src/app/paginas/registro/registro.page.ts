import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion'; 
import { AlertController, IonicModule } from '@ionic/angular'; // Nuevo: IonicModule
import { FormsModule } from '@angular/forms'; // Nuevo: FormsModule
import { CommonModule } from '@angular/common'; // Nuevo: CommonModule

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true, // ✅ Standalone
  imports: [IonicModule, CommonModule, FormsModule] // ✅ Imports necesarios
})
export class RegistroPage {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private authService: AutenticacionService, 
    private router: Router,
    private alertController: AlertController
  ) {}
  // ... (Resto del código TS es el mismo)
  async onRegister() {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      await this.showAlert('Error', 'Por favor complete todos los campos');
      return;
    }
    if (this.password !== this.confirmPassword) {
      await this.showAlert('Error', 'Las contraseñas no coinciden');
      return;
    }

    const user = { name: this.name, email: this.email, password: this.password };

    if (this.authService.registrar(user)) {
      await this.showAlert('Éxito', 'Usuario registrado correctamente');
      this.router.navigate(['/iniciar-sesion']);
    } else {
      await this.showAlert('Error', 'El usuario ya existe');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}