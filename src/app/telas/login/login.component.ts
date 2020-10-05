import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private apiService: ApiService) {
    this.teste()
   }

  teste(){
    this.apiService.teste().subscribe(
      r => console.log( r )
    )


      
  }

}
