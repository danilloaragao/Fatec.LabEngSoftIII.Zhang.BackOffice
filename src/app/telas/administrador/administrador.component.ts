import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent{

  constructor(private appComponent: AppComponent) {
    this.appComponent.pagina = 'Administrador'
   }

  ngOnInit(): void {
  }

}
