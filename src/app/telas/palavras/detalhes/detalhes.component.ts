import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Palavra from 'src/app/interfaces/palavra';
import Tema from 'src/app/interfaces/tema';
import { ApiService } from 'src/app/services/api-service';
import { LocalStorageService } from 'src/app/services/storage-service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  @Input() public palavra: Palavra = {
    id: 0,
    palavra: '',
    dica1: '',
    dica2: '',
    idTema: 0
  }

  @Input() alteracao: boolean

  temaAtual: Tema = { id: 0, descricao: '' }
  temas: Tema[]

  constructor(private apiService: ApiService, private storage: LocalStorageService, private router: Router) {
    this.temas = JSON.parse(this.storage.get('temas'))
  }
  
  ngOnInit(): void {
    if (this.alteracao) {
      this.temaAtual = this.temas.find(t => t.id === this.palavra.idTema)
    }
  }

  inserir(){
    let token = this.storage.get('token')
    this.apiService.gravarPalavra(token, this.palavra).subscribe(
      resp =>{
        alert('Palavra inserida com sucesso.')
        this.router.navigate['palavras']
      },err=>{
        alert(err.error.text)
        if(err.error.text == "Palavra cadastrada com sucesso")
        window.location.reload()
      }
    )
  }

  alterar(){
    let token = this.storage.get('token')
    this.apiService.alterarPalavra(token, this.palavra).subscribe(
      resp =>{
        alert('Palavra alterada com sucesso.')
        this.router.navigate['palavras']
      },err=>{
        alert(err.error.text)
        if(err.error.text == "Palavra alterada com sucesso.")
        window.location.reload()
      }
    )
  }

  deletar(){
    let token = this.storage.get('token')
    this.apiService.deletarPalavra(token, this.palavra.id).subscribe(
      resp =>{
        alert('Palavra deletada com sucesso.')
        this.router.navigate['palavras']
      },err=>{
        alert(err.error.text)
        if(err.error.text == "Palavra deletada com sucesso.")
        window.location.reload()
      }
    )
  }

  selecaoTema(idTema){
    this.palavra.idTema = idTema
  }
}