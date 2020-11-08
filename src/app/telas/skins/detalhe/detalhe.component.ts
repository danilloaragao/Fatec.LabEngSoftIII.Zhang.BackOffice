import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Skin from 'src/app/interfaces/skin';
import { ApiService } from 'src/app/services/api-service';
import { LocalStorageService } from 'src/app/services/storage-service';

@Component({
  selector: 'app-detalhe-skin',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  
  @Input() public skin: Skin = {
    id: 0,
    descricao: '',
    sprite: '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',
    jumpScare: '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',
    nivel: 0,
    isVip: false,
    valorCash: 0
   }

    @Input() alteracao: boolean

  constructor(private apiService: ApiService, private storage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {    
    console.log(this.skin)
    document.querySelector('#spriteImg')['id'] = `spriteImg${this.skin.id}`
    document.querySelector('#jumpScareImg')['id'] = `jumpScareImg${this.skin.id}`

    document.querySelector('#spriteUpload')['id'] = `spriteUpload${this.skin.id}`
    document.querySelector('#jumpScareUpload')['id'] = `jumpScareUpload${this.skin.id}`

    this.atualizaPartes()
  }

  uploadParte(id, parte){
    const imagem = document.querySelector(`#${id}${this.skin.id}`)
    const file: File = imagem['files'][0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const imgBase64 = reader.result.toString().replace('data:image/png;base64,','')
      this.skin[parte] = imgBase64
      console.log(this.skin)
      this.atualizaPartes()
    }
  }

  atualizaPartes(){
    document.querySelector(`#spriteImg${this.skin.id}`)['src'] = `data:image/png;base64, ${this.skin.sprite}`
    document.querySelector(`#jumpScareImg${this.skin.id}`)['src'] = `data:image/png;base64, ${this.skin.jumpScare}`
  }

  clickIndereto(idUpload){
    document.getElementById(`${idUpload}${this.skin.id}`).click()
  }

  inserir(){
    let token = this.storage.get('token')
    this.apiService.gravarSkin(token, this.skin).subscribe(
      resp =>{
        alert('Skin inserida com sucesso.')
        this.router.navigate['skins']
      },err=>{
        alert(err.error.text)
        if(err.error.text == "Skin cadastrada com sucesso")
        window.location.reload()
      }
    )
  }

  alterar(){
    let token = this.storage.get('token')
    this.apiService.alterarSkin(token, this.skin).subscribe(
      resp =>{
        alert('Skin alterada com sucesso.')
        this.router.navigate['skins']
      },err=>{
        alert(err.error.text)
        if(err.error.text == "Skin alterada com sucesso.")
        window.location.reload()
      }
    )
  }

  deletar(){
    let token = this.storage.get('token')
    this.apiService.deletarSkin(token, this.skin.id).subscribe(
      resp =>{
        alert('Skin deletada com sucesso.')
        this.router.navigate['skins']
      },err=>{
        alert(err.error.text)
        if(err.error.text == "Skin deletada com sucesso.")
        window.location.reload()
      }
    )
  }
}
