import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'; 
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule] 
})
export class PostDetailPage implements OnInit {
  postId: number | null = null;
  post: any = null; 
  isLoading: boolean = true;
  newComment: string = ''; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.postId = +id; 
        this.loadPostDetail();
      } else {
        this.isLoading = false;
      }
    });
  }

  loadPostDetail() {
    if (!this.postId) return;

    this.apiService.getPost(this.postId).subscribe({
      next: (response) => {
        this.post = response;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar post:', error);
        this.isLoading = false;
        alert('No se pudo cargar el detalle de la publicación.');
      }
    });
  }
  
  submitComment() {
    if (!this.postId || !this.newComment.trim()) return;

    this.apiService.addComment(this.postId, this.newComment).subscribe({ 
      next: (response) => {
        if (this.post && this.post.comments) {
          this.post.comments.unshift(response); 
        } else if (this.post) {
          this.post.comments = [response];
        }
        
        this.newComment = ''; 
      },
      error: (error) => {
        console.error('Error al comentar:', error);
        alert('No se pudo agregar el comentario.');
      }
    });
  }

}