
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = 'https://zhang-api.herokuapp.com/api/'

  constructor(private http: HttpClient) { }

  teste(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Jogo/Palavra`)
  }
}
