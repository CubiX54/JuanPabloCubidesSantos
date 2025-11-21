import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink] 
})
export class FeedPage implements OnInit {
  posts: any[] = [];
  page: number = 1;
  canLoadMore: boolean = true;
  isLoading: boolean = true;

  constructor(
    public apiService: ApiService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts(event?: any) {
    this.apiService.getPosts(this.page).subscribe({ 
      next: (response) => {
        this.isLoading = false;
        this.posts = [...this.posts, ...response.data]; 
        this.page++;
        this.canLoadMore = response.current_page < response.last_page;
        if (event) {
          event.target.complete(); 
        }
      },
      error: (error) => {
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
        if (error.status === 401) {
             this.logout();
        } else {
             alert('Error al cargar el feed.');
        }
      }
    });
  }


  handleLike(post: any) {
    if (post.is_liked) {
      this.apiService.unlikePost(post.id).subscribe({
        next: () => {
          post.is_liked = false;
          post.likes_count = (post.likes_count || 1) - 1;
        },
        error: (error) => console.error('Error al quitar like:', error)
      });
    } else {
      this.apiService.likePost(post.id).subscribe({ 
        next: () => {
          post.is_liked = true;
          post.likes_count = (post.likes_count || 0) + 1;
        },
        error: (error) => console.error('Error al dar like:', error)
      });
    }
  }
  
  loadMore(event: any) {
    if (this.canLoadMore) {
      this.loadPosts(event);
    } else {
      event.target.complete();
    }
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
  
  goTo(path: string) {
    this.router.navigate([`/${path}`]);
  }
}