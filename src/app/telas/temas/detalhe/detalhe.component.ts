import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Tema from 'src/app/interfaces/tema';
import { ApiService } from 'src/app/services/api-service';
import { LocalStorageService } from 'src/app/services/storage-service';

@Component({
  selector: 'app-detalhe-tema',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent {
  @Input() alteracao: boolean

  @Input() tema: Tema = {
    id:0,
    descricao:''
  }

  constructor(private apiService: ApiService, private storage: LocalStorageService, private router: Router) { }

  inserir(){
    let token = this.storage.get('token')
    this.apiService.gravarTema(token, this.tema).subscribe(
      resp =>{
        alert('Tema cadastrado com sucesso.')
        this.router.navigate['palavras']
      },err=>{
        alert(err.error.text)
        if(err.error.text == "Tema cadastrado com sucesso")
        window.location.reload()
      }
    )
  }

  alterar(){
    let token = this.storage.get('token')
    this.apiService.alterarTema(token, this.tema).subscribe(
      resp =>{
        alert('Tema alterado com sucesso.')
        this.router.navigate['tema']
      },err=>{
        alert(err.error.text)
        if(err.error.text == "Tema alterado com sucesso.")
        window.location.reload()
      }
    )
  }

  deletar(){
    let token = this.storage.get('token')
    this.apiService.deletarTema(token, this.tema.id).subscribe(
      resp =>{
        alert('Tema deletado com sucesso.')
        this.router.navigate['tema']
      },err=>{
        alert(err.error.text)
        if(err.error.text == "Tema deletado com sucesso.")
        window.location.reload()
      }
    )
  }


}
