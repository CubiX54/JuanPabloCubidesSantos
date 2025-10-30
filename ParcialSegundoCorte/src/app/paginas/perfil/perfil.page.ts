import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion'; 
import { CarritoService } from '../../services/carrito'; 
import { IonicModule } from '@ionic/angular'; // Nuevo: IonicModule
import { CommonModule } from '@angular/common'; // Nuevo: CommonModule

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true, // ✅ Standalone
  imports: [IonicModule, CommonModule] // ✅ Imports necesarios
})
export class PerfilPage implements OnInit {
  user: any = null;
  purchases: any[] = [];

  constructor(
    private authService: AutenticacionService, 
    private carritoService: CarritoService,    
    private router: Router
  ) {}
  // ... (Resto del código TS es el mismo)
  ngOnInit() {
    this.loadUserData();
  }

  ionViewWillEnter() {
    this.loadUserData();
  }

  loadUserData() {
    this.user = this.authService.getCurrentUser();
    
    if (this.user) {
      this.purchases = this.carritoService.getCompras(this.user.email); 
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/iniciar-sesion']);
  }
}