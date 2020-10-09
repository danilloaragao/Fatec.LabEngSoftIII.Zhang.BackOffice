import { Component } from '@angular/core';
import { LocalStorageService } from './services/storage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private storage: LocalStorageService) {
  }

  pagina = ''
  title = 'Z-Hang - Backoffice'
}
