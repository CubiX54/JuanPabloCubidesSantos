import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../services/api';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink]
})
export class ProfilePage implements OnInit {
  user: any = null;
  userPosts: any[] = [];
  isLoading: boolean = true; 

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.apiService.getMe().subscribe({ 
      next: (response) => {
        this.isLoading = false;
        this.user = response.user;
        this.userPosts = response.user.posts || []; 
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error al cargar perfil:', error);

        if (error.status === 401) {
            this.logout();
        } else {
            alert('Error al cargar perfil.');
        }
      }
    });
  }
  
  logout() {
    this.apiService.logout().subscribe({ 
      next: () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      error: () => {
        localStorage.removeItem('token'); 
        this.router.navigate(['/login']);
      }
    });
  }
}