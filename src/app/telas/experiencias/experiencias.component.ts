import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import Experiencia from 'src/app/interfaces/experiencia';
import { ApiService } from 'src/app/services/api-service';
import { LocalStorageService } from 'src/app/services/storage-service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {

  public listaExperiencias: Experiencia[]

  constructor(private apiService: ApiService, private storage: LocalStorageService, private appComponent: AppComponent) {
    appComponent.pagina = 'Experiência'
    
    let token = this.storage.get('token')

    this.apiService.pegarTemas(token).subscribe(
      dados => {
        this.storage.set('temas', JSON.stringify(dados))
      }
    )

    this.apiService.pegarExperiencias(token).subscribe(
      dados => {
        this.listaExperiencias = dados
      }
    )
  }

}
