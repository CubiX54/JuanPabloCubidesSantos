import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'feed', 
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage),
  },
  {
    path: 'feed',
    loadComponent: () => import('./pages/feed/feed.page').then(m => m.FeedPage),
    // Rutas sin protección (canActivate) para evitar errores de compilación
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage),
  },
  {
    path: 'create-post',
    loadComponent: () => import('./pages/create-post/create-post.page').then(m => m.CreatePostPage),
  },
  {
    path: 'friends',
    loadComponent: () => import('./pages/friends/friends.page').then(m => m.FriendsPage),
  },
  {
    path: 'post-detail/:id',
    loadComponent: () => import('./pages/post-detail/post-detail.page').then(m => m.PostDetailPage),
  },
];