import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import Tema from 'src/app/interfaces/tema';
import { ApiService } from 'src/app/services/api-service';
import { LocalStorageService } from 'src/app/services/storage-service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent {

  public listaTemas: Tema[]

  constructor(private apiService: ApiService, private storage: LocalStorageService, private appComponent: AppComponent) {
    appComponent.pagina = 'Temas' 
    let token = this.storage.get('token')

    this.apiService.pegarTemas(token).subscribe(
      dados => {
        this.listaTemas = dados
      }
    )
  }


}
