import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  getMe(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me`, { headers: this.getHeaders() });
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}, { headers: this.getHeaders() });
  }



  getPosts(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts?page=${page}`, { headers: this.getHeaders() });
  }

  getPost(postId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${postId}`, { headers: this.getHeaders() });
  }

  createPost(formData: FormData): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({

      'Authorization': `Bearer ${token}` 
    });
    return this.http.post(`${this.apiUrl}/posts`, formData, { headers });
}

  likePost(postId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts/${postId}/like`, {}, { headers: this.getHeaders() });
  }

  unlikePost(postId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/posts/${postId}/like`, { headers: this.getHeaders() });
  }


  addComment(postId: number, content: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/posts/${postId}/comments`,
      { content },
      { headers: this.getHeaders() }
    );
  }

  getFriends(): Observable<any> {
    return this.http.get(`${this.apiUrl}/friends`, { headers: this.getHeaders() });
  }

  getPendingFriendships(): Observable<any> {
    return this.http.get(`${this.apiUrl}/friendships/pending`, { headers: this.getHeaders() });
  }

  acceptFriendship(friendshipId: number): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/friendships/${friendshipId}/accept`,
      {},
      { headers: this.getHeaders() }
    );
  }

  sendFriendRequest(targetUserId: number): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/users/${targetUserId}/friend`,
      {},
      { headers: this.getHeaders() }
    );
  }
}