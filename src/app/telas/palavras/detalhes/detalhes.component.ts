import { Component, Input, OnInit } from '@angular/core';
import Palavra from 'src/app/interfaces/palavra';
import Tema from 'src/app/interfaces/tema';
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

  constructor(private storage: LocalStorageService) {
    this.temas = JSON.parse(this.storage.get('temas'))
  }
  
  ngOnInit(): void {
    if (this.alteracao) {
      this.temaAtual = this.temas.find(t => t.id === this.palavra.idTema)
    }
  }
}