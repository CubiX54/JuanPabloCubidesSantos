import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'; 
import { ApiService } from '../../services/api'; 

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CreatePostPage implements OnInit {
  caption: string = '';
  photoPath: string | undefined; 
  photoBlob: Blob | null = null; 
  isLoading: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {}

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri, 
        source: CameraSource.Camera 
      });

      this.photoPath = image.webPath;

      const response = await fetch(image.webPath!);
      this.photoBlob = await response.blob();
      
    } catch (error) {
      console.error('Error al tomar foto:', error);
      alert('Error al abrir la cámara o tomar la foto.');
    }
  }

  submitPost() {
    if (!this.photoBlob) {
      alert('Debes tomar una foto para publicar.');
      return;
    }

    if (!this.caption.trim()) {
      alert('Debes añadir un texto a la publicación.');
      return;
    }
    
    this.isLoading = true;

    const formData = new FormData();
    formData.append('caption', this.caption);
    
    formData.append('image', this.photoBlob, 'post_image.jpeg'); 

    this.apiService.createPost(formData).subscribe({
      next: (response) => {
        this.isLoading = false;
        alert('¡Publicación subida con éxito!');
        this.router.navigate(['/feed']); 
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error al subir publicación:', error);
        
        alert('Error al subir la publicación. Revisa la consola o el error del servidor.');
      }
    });
  }
}