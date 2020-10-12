
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import Credenciais from '../interfaces/credenciais';
import Tema from '../interfaces/tema';
import Palavra from '../interfaces/palavra';
import Experiencia from '../interfaces/experiencia';
import Skin from '../interfaces/skin';
import CadastroAdm from '../interfaces/cadastroAdm';

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

  gravarTema(token: string, tema:Tema) {
    let hdr = {
      headers: new HttpHeaders({ "token": token })
    }
    return this.http.post<string>(`${this.baseUrl}Administracao/Tema`, tema, hdr)
  }

  alterarTema(token: string, tema:Tema) {
    let hdr = {
      headers: new HttpHeaders({ "token": token })
    }
    return this.http.put<string>(`${this.baseUrl}Administracao/Tema`, tema, hdr)
  }

  deletarTema(token: string, idTema:number) {
    let options = {
      headers: new HttpHeaders({ "token": token, "accept": "text/plain" })
    }
    return this.http.delete<string>(`${this.baseUrl}Administracao/Tema/${idTema}`, options)
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

  deletarPalavra(token: string, idPalavra:number) {
    let options = {
      headers: new HttpHeaders({ "token": token, "accept": "text/plain" })
    }
    return this.http.delete<string>(`${this.baseUrl}Administracao/Palavra/${idPalavra}`, options)
  }

  //#endregion

  //#region Experiencia
  pegarExperiencias(token: string) {
    let hdr = {
      headers: new HttpHeaders({ "token": token })
    }
    return this.http.get<Experiencia[]>(`${this.baseUrl}Administracao/Experiencia`, hdr)
  }

  gravarExperiencia(token: string, experiencia:Experiencia) {
    let hdr = {
      headers: new HttpHeaders({ "token": token })
    }
    return this.http.post<string>(`${this.baseUrl}Administracao/Experiencia`, experiencia, hdr)
  }

  alterarExperiencia(token: string, experiencia:Experiencia) {
    let hdr = {
      headers: new HttpHeaders({ "token": token })
    }
    return this.http.put<string>(`${this.baseUrl}Administracao/Experiencia`, experiencia, hdr)
  }

  deletarExperiencia(token: string, idExperiencia:number) {
    let options = {
      headers: new HttpHeaders({ "token": token, "accept": "text/plain" })
    }
    return this.http.delete<string>(`${this.baseUrl}Administracao/Experiencia/${idExperiencia}`, options)
  }
  //#endregion

  //#region Skin
  pegarSkins(token: string) {
    let hdr = {
      headers: new HttpHeaders({ "token": token })
    }
    return this.http.get<Skin[]>(`${this.baseUrl}Administracao/Skins`, hdr)
  }

  gravarSkin(token: string, skin:Skin) {
    let hdr = {
      headers: new HttpHeaders({ "token": token })
    }
    return this.http.post<string>(`${this.baseUrl}Administracao/Skin`, skin, hdr)
  }

  alterarSkin(token: string, skin:Skin) {
    let hdr = {
      headers: new HttpHeaders({ "token": token })
    }
    return this.http.put<string>(`${this.baseUrl}Administracao/Skin`, skin, hdr)
  }

  deletarSkin(token: string, idSkin:number) {
    let options = {
      headers: new HttpHeaders({ "token": token, "accept": "text/plain" })
    }
    return this.http.delete<string>(`${this.baseUrl}Administracao/Skin/${idSkin}`, options)
  }
  //#endregion

//#region Administrador
cadastrarAdm(token: string, cadastroAdm:CadastroAdm) {
  let hdr = {
    headers: new HttpHeaders({ "token": token })
  }
  return this.http.post<string>(`${this.baseUrl}Administracao/CadastroAdm`, cadastroAdm, hdr)
}
//#endregion

}

