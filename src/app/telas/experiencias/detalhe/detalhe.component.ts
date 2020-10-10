import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Experiencia from 'src/app/interfaces/experiencia';
import Palavra from 'src/app/interfaces/palavra';
import Tema from 'src/app/interfaces/tema';
import { ApiService } from 'src/app/services/api-service';
import { LocalStorageService } from 'src/app/services/storage-service';

@Component({
  selector: 'app-detalhe-experiencia',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent{

  @Input() public experiencia: Experiencia = {
    id: 0,
    nivel: 0,
    valor: 0
  }

  @Input() alteracao: boolean

  constructor(private apiService: ApiService, private storage: LocalStorageService, private router: Router) { }

  inserir(){
    let token = this.storage.get('token')
    this.apiService.gravarExperiencia(token, this.experiencia).subscribe(
      resp =>{
        alert('Experiencia cadastrada com sucesso.')
        this.router.navigate['experiencia']
      },err=>{
        alert(err.error.text)
        if(err.error.text == "Experiencia cadastrada com sucesso")
        window.location.reload()
      }
    )
  }

  alterar(){
    let token = this.storage.get('token')
    this.apiService.alterarExperiencia(token, this.experiencia).subscribe(
      resp =>{
        alert('Experiencia alterada com sucesso.')
        this.router.navigate['experiencia']
      },err=>{
        alert(err.error.text)
        if(err.error.text == "Experiencia alterada com sucesso.")
        window.location.reload()
      }
    )
  }

  deletar(){
    let token = this.storage.get('token')
    this.apiService.deletarExperiencia(token, this.experiencia.id).subscribe(
      resp =>{
        alert('Experiencia deletada com sucesso.')
        this.router.navigate['experiencia']
      },err=>{
        alert(err.error.text)
        if(err.error.text == "Experiencia deletada com sucesso.")
        window.location.reload()
      }
    )
  }
}
