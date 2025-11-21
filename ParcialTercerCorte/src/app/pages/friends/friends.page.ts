import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class FriendsPage implements OnInit {
  friends: any[] = [];
  pendingRequests: any[] = [];
  availableUsers: any[] = []; 
  isLoading: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loadUsersToBefriend(); 
  }
  
  loadUsersToBefriend() {

    this.availableUsers = [
        { id: 101, name: "Maria Garcia", status: 'available' }, 
        { id: 102, name: "Carlos Perez", status: 'available' }
    ];
    this.isLoading = false;
  }
  
  sendFriendRequest(targetUserId: number) {
    if (!targetUserId) return;

    this.apiService.sendFriendRequest(targetUserId).subscribe({
      next: (response) => {
        alert('¡Solicitud de amistad enviada con éxito!');
        
        const user = this.availableUsers.find(u => u.id === targetUserId);
        if (user) {
            user.status = 'pending';
        }
      },
      error: (err) => {
        console.error('Error al enviar solicitud:', err);
        
        if (err.status === 422) {
             alert('Ya existe una relación o la solicitud ya fue enviada.');
        } else {
             alert('No se pudo enviar la solicitud. Revisa la consola.');
        }
      }
    });
  }
}