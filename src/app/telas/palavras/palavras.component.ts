import { Component, OnInit } from '@angular/core';
import Palavra from 'src/app/interfaces/palavra';
import Tema from 'src/app/interfaces/tema';
import { ApiService } from 'src/app/services/api-service';
import { LocalStorageService } from 'src/app/services/storage-service';

@Component({
  selector: 'app-palavras',
  templateUrl: './palavras.component.html',
  styleUrls: ['./palavras.component.css']
})
export class PalavrasComponent {

  public listaPalavras: Palavra[]

  constructor(private apiService: ApiService, private storage: LocalStorageService) {
    
    let token = this.storage.get('token')

    this.apiService.pegarTemas(token).subscribe(
      dados => {
        this.storage.set('temas', JSON.stringify(dados))
      }
    )

    this.apiService.pegarPalavras(token).subscribe(
      dados => {
        this.listaPalavras = dados
      }
    )
  }
}
