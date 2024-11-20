import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { Login } from '../models/login';
import { Usuario } from '../models/usuario';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  http = inject(HttpClient);
  API = environment.rotaEndPoint + "/login";

  constructor() { }

  logar(login: Login): Observable<string> {
    return this.http.post<string>(this.API, login, { responseType: 'text' as 'json' });
  }

  addToken(token: string) {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('token', token);
    }
  }

  removerToken() {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.removeItem('token');
    }
  }

  getToken() {
    if (typeof window !== 'undefined' && localStorage) {
      return localStorage.getItem('token');
    }
    return null;
  }

  jwtDecode() {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode<JwtPayload>(token);
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
      }
    }
    return null;
  }

  hasPermission(role: string): boolean {
    const user = this.jwtDecode() as Usuario | null;
    if (user && user.role === role) {
      return true;
    }
    return false;
  }
}
