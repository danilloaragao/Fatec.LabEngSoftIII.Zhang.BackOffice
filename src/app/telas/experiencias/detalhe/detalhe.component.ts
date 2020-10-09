import { Component, Input, OnInit } from '@angular/core';
import Experiencia from 'src/app/interfaces/experiencia';
import Palavra from 'src/app/interfaces/palavra';
import Tema from 'src/app/interfaces/tema';
import { LocalStorageService } from 'src/app/services/storage-service';

@Component({
  selector: 'app-detalhe-experiencia',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  @Input() public experiencia: Experiencia = {
    id: 0,
    nivel: 0,
    valor: 0
  }

  @Input() alteracao: boolean

  constructor() {
    
  }
  
  ngOnInit(): void {
   
  }
}
