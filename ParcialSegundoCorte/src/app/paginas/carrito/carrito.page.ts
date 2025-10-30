import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../../services/carrito'; 
import { AutenticacionService } from '../../services/autenticacion'; 
import { Producto } from '../../services/productos'; 
import { AlertController, ToastController, IonicModule } from '@ionic/angular'; // Nuevo: IonicModule
import { CommonModule } from '@angular/common'; // Nuevo: CommonModule

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true, // ✅ Standalone
  imports: [IonicModule, CommonModule] // ✅ Imports necesarios
})
export class CarritoPage implements OnInit {
  cartItems: Producto[] = []; 
  total: number = 0;

  constructor(
    private carritoService: CarritoService,       
    private authService: AutenticacionService,    
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}
  // ... (Resto del código TS es el mismo)
  ngOnInit() {
    this.loadCart();
  }
  // ... (resto de los métodos loadCart, removeItem, completePurchase, etc.)
  ionViewWillEnter() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.carritoService.getCart();
    this.total = this.carritoService.getCartTotal();
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.carritoService['carrito'] = this.cartItems; 
    this.carritoService['guardarCarrito'](); 
    this.loadCart();
    this.showToast('Producto eliminado del carrito');
  }

  async completePurchase() {
    const user = this.authService.getCurrentUser();
    
    if (!user) {
      await this.showAlert('Error', 'Necesitas iniciar sesión para comprar.');
      return;
    }
    
    const alert = await this.alertController.create({
      header: 'Confirmar Compra',
      message: `¿Desea completar la compra por $${this.total.toFixed(2)}?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Comprar',
          handler: () => {
            this.carritoService.completePurchase(user.email);
            this.showToast('Compra realizada con éxito');
            this.router.navigate(['/perfil']);
          }
        }
      ]
    });
    await alert.present();
  }

  goToProducts() {
    this.router.navigate(['/productos']);
  }
  
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header, message, buttons: ['OK']
    });
    await alert.present();
  }
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message, duration: 2000, position: 'bottom'
    });
    toast.present();
  }
}