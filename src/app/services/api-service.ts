
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import Credenciais from '../interfaces/credenciais';
import Tema from '../interfaces/tema';
import Palavra from '../interfaces/palavra';
import Experiencia from '../interfaces/experiencia';
import Skin from '../interfaces/skin';

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

  //#region Tema

  pegarTemas(token: string) {
    let hdr = {
      headers: new HttpHeaders({ "token": token })
    }
    return this.http.get<Tema[]>(`${this.baseUrl}Administracao/Temas`, hdr)
  }

  //#endregion

  //#region Palavra
  pegarPalavras(token: string) {
    let hdr = {
      headers: new HttpHeaders({ "token": token })
    }
    return this.http.get<Palavra[]>(`${this.baseUrl}Administracao/Palavras`, hdr)
  }

  gravarPalavra(token: string, palavra:Palavra) {
    let hdr = {
      headers: new HttpHeaders({ "token": token })
    }
    return this.http.post<string>(`${this.baseUrl}Administracao/Palavra`, palavra, hdr)
  }

  alterarPalavra(token: string, palavra:Palavra) {
    let hdr = {
      headers: new HttpHeaders({ "token": token })
    }
    return this.http.put<string>(`${this.baseUrl}Administracao/Palavra`, palavra, hdr)
  }

  deletarPalavra(token: string, palavra:Palavra) {
    let options = {
      headers: new HttpHeaders({ "token": token, "accept": "text/plain" })
    }
    return this.http.delete<string>(`${this.baseUrl}Administracao/Palavra/${palavra.id}`, options)
  }

  //#endregion

  //#region Experiencia
  pegarExperiencias(token: string) {
    let hdr = {
      headers: new HttpHeaders({ "token": token })
    }
    return this.http.get<Experiencia[]>(`${this.baseUrl}Administracao/Experiencia`, hdr)
  }
  //#endregion

  //#region Skin
  pegarSkins(token: string) {
    let hdr = {
      headers: new HttpHeaders({ "token": token })
    }
    return this.http.get<Skin[]>(`${this.baseUrl}Administracao/Skins`, hdr)
  }
  //#endregion
}

