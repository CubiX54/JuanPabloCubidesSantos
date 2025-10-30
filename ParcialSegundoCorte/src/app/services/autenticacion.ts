import { Injectable } from '@angular/core';

interface Usuario {
  email: string;
  password: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private usuarioActual: Usuario | null = null;
  
  constructor() {
    this.cargarUsuarioActual();
  }

  registrar(usuario: Usuario): boolean {
    const usuarios = this.getUsuarios();
    if (usuarios.find(u => u.email === usuario.email)) {
      return false; 
    }
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return true;
  }

  login(email: string, password: string): boolean {
    const usuarios = this.getUsuarios();
    const usuario = usuarios.find(u => u.email === email && u.password === password);
        
    if (usuario) {
      this.usuarioActual = usuario;
      localStorage.setItem('usuarioActual', JSON.stringify(usuario));
      return true;
    }
    return false;
  }

  logout() {
    this.usuarioActual = null;
    localStorage.removeItem('usuarioActual');
    localStorage.removeItem('carrito'); 
  }

  getCurrentUser(): Usuario | null {
    return this.usuarioActual;
  }

  isAuthenticated(): boolean {
    return this.usuarioActual !== null;
  }

  private getUsuarios(): Usuario[] {
    const usuarios = localStorage.getItem('usuarios');
    return usuarios ? JSON.parse(usuarios) : [];
  }

  private cargarUsuarioActual() {
    const usuario = localStorage.getItem('usuarioActual');
    if (usuario) {
      this.usuarioActual = JSON.parse(usuario);
    }
  }
}