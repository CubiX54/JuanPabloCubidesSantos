import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion'; 
import { AlertController, IonicModule } from '@ionic/angular'; // Nuevo: IonicModule
import { FormsModule } from '@angular/forms'; // Nuevo: FormsModule
import { CommonModule } from '@angular/common'; // Nuevo: CommonModule

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
  standalone: true, // ✅ Standalone
  imports: [IonicModule, CommonModule, FormsModule] // ✅ Imports necesarios
})
export class IniciarSesionPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AutenticacionService, 
    private router: Router,
    private alertController: AlertController
  ) {}
  async onLogin() {
    if (!this.email || !this.password) {
      await this.showAlert('Error', 'Por favor complete todos los campos');
      return;
    }
    
    
    if (this.authService.login(this.email, this.password)) { 
      this.router.navigate(['/productos']); 
    } else {
      await this.showAlert('Error', 'Credenciales incorrectas'); 
    }
  }

  goToRegister() {
    this.router.navigate(['/registro']);
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