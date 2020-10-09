import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
import { FormsModule } from '@angular/forms'
import Credenciais from 'src/app/interfaces/credenciais';
import { LocalStorageService } from 'src/app/services/storage-service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private apiService: ApiService, private storage: LocalStorageService, private router: Router,private appComponent: AppComponent) {
    this.storage.remove('usuario')
    this.storage.remove('token')
    this.appComponent.pagina = ''
  }

  public credenciais: Credenciais = { Login: 'SuperUser', Senha: 'SuperUserGrupo2' }

  async logar() {
    this.apiService.login(this.credenciais).subscribe(
      dados =>{
        this.storage.set('usuario', dados['login'])
        this.storage.set('token', dados['token'])
        this.router.navigate(['/palavras'])
      }
    )
  }
}

