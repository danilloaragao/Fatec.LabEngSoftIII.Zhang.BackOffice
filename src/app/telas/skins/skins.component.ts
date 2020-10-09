import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import Skin from 'src/app/interfaces/skin';
import { ApiService } from 'src/app/services/api-service';
import { LocalStorageService } from 'src/app/services/storage-service';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.css']
})
export class SkinsComponent {
  @Input() listaSkins: Skin[]

  constructor(private apiService: ApiService, private storage: LocalStorageService, private appComponent: AppComponent) {
    appComponent.pagina = 'Skins'
    let token = this.storage.get('token')

    this.apiService.pegarSkins(token).subscribe(
      dados => {
        this.listaSkins = dados
      }
    )
  }
}
