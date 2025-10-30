import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService, Producto } from '../../services/productos'; 
import { CarritoService } from '../../services/carrito'; 
import { ToastController, IonicModule } from '@ionic/angular'; // Nuevo: IonicModule
import { CommonModule } from '@angular/common'; // Nuevo: CommonModule

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true, // ✅ Standalone
  imports: [IonicModule, CommonModule] // ✅ Imports necesarios
})
export class ProductosPage implements OnInit {
  products: Producto[] = []; 
  loading: boolean = true;
  cartCount: number = 0;

  constructor(
    private productosService: ProductosService, 
    private carritoService: CarritoService,     
    private router: Router,
    private toastController: ToastController
  ) {}
  // ... (Resto del código TS es el mismo)
  ngOnInit() {
    this.loadProducts();
    this.updateCartCount();
  }
  // ... (el resto de los métodos loadProducts, addToCart, goToCart, etc.)
  ionViewWillEnter() {
    this.updateCartCount();
  }

  loadProducts() {
    this.loading = true;
    this.productosService.getProductos().subscribe({ 
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error cargando productos:', error);
        this.loading = false;
      }
    });
  }

  addToCart(product: Producto) {
    this.carritoService.addToCart(product); 
    this.updateCartCount();
    this.showToast('Producto agregado al carrito');
  }

  updateCartCount() {
    this.cartCount = this.carritoService.getCart().length; 
  }

  goToCart() {
    this.router.navigate(['/carrito']);
  }

  goToProfile() {
    this.router.navigate(['/perfil']);
  }

  doRefresh(event: any) {
    this.productosService.getProductos().subscribe({ 
      next: (data) => {
        this.products = data;
        event.target.complete();
      },
      error: () => {
        event.target.complete();
      }
    });
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}