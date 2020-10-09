
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import Credenciais from '../interfaces/credenciais';
import Tema from '../interfaces/tema';
import Palavra from '../interfaces/palavra';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = 'https://zhang-api.herokuapp.com/api/'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  login(credenciais: Credenciais) {
    return this.http.post(`${this.baseUrl}Administracao/LoginAdm`, JSON.stringify(credenciais), this.httpOptions)
  }

  pegarTemas(token: string) {
    let hdr = {
      headers: new HttpHeaders({"token": token })
    }
    return this.http.get<Tema[]>(`${this.baseUrl}Administracao/Temas`, hdr)
  }

  pegarPalavras(token: string) {
    let hdr = {
      headers: new HttpHeaders({"token": token })
    }
    return this.http.get<Palavra[]>(`${this.baseUrl}Administracao/Palavras`, hdr)
  }

}

