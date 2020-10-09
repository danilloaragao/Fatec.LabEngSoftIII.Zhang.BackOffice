import { Component, Input, OnInit } from '@angular/core';
import Tema from 'src/app/interfaces/tema';

@Component({
  selector: 'app-detalhe-tema',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  @Input() alteracao: boolean

  @Input() tema: Tema = {
    id:0,
    descricao:''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
