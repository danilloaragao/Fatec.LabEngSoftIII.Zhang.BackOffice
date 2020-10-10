import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import CadastroAdm from 'src/app/interfaces/cadastroAdm';
import { ApiService } from 'src/app/services/api-service';
import { LocalStorageService } from 'src/app/services/storage-service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {
  public cadastroAdm: CadastroAdm = {
    email: '',
    login: '',
  }

  constructor(private appComponent: AppComponent, private apiService: ApiService, private storage: LocalStorageService) {
    this.appComponent.pagina = 'Administrador'
  }

  cadastrar() {
    let token = this.storage.get('token')
    this.apiService.cadastrarAdm(token, this.cadastroAdm).subscribe(
      resp => {
        alert('Cadastro efetuado com sucesso.')
      }, err => {
        alert(err.error.text)
      }
    )
  }

}
