import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Skin from 'src/app/interfaces/skin';

@Component({
  selector: 'app-detalhe-skin',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  
  // @Input() public skin: Skin = {
  //   id: 1,
  //   descricao: "teste 1",
  //   bracoDireito: "iVBORw0KGgoAAAANSUhEUgAAADUAAABBCAIAAAD+N3vwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE6SURBVGhD7drbDoMgEEVR8f//mR5TU6tMFZgLpwk7afq6MjD6Yso5L8St+z9rCT/mEW4+REv8h/N9xznCw4cIiScfYiNefYiKKPgQD3EVKSnJ7vi25wszcX/+0RKP5zPVWnw6vT9K4vARPr/fxhKvPraLKMyPiiifLw/x5/0jId7tBwPxzodEYmQPPlQSI0f47EMDiVU+sRhirW/UrjTMbwix7Xzjic33L5jYsx+RxB4fEokedfpQSfQYYb9PzJyo8gVcRO38vIkG5+tKtLl/fkSz/XAimvmQSFRm6UMlUTlCYx+yJdr7xLqJLj7DXfGanxXR8XxNiL73T0903w8l0d2HRGJlET5UEitHGOQTqyHG+fouYuj8OojR59u6KwPuXxNxzH58E++58/sSXdOna/p0TZ+u6dO0LC9XpZZTEZhUbwAAAABJRU5ErkJggg==",
  //   bracoEsquerdo: "iVBORw0KGgoAAAANSUhEUgAAADUAAABBCAIAAAD+N3vwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFBSURBVGhD7dpLjoUgEEBR7f3v2b4JHUOEVqC+A+7ANz0pqOjgndd1HYn7+fvNWmrfeZ55feB47vNdqgyPMvpuHKXz1TjK5XvgKJGvxVEWXxfHuy2F7z8cz3jfC45y7Uep/mQJ9rXDe3xPRfq6J/sozPd+7e5ifIM4CvCN48jbN4UjV98sjsL2o/SOIz9fO7xPHDn51nDk4eteu8HMfQs7UWfrE+LI0CfHkZVPBUcmPi0cme9HaQ1H+r52eMs4UvZ1T1aSpk/x2t2p+SxwpOMzwpGCzw5HUp8pjjT3o6SII5GvHZ4ujtZ9Djha9HWvnUUrPuudqJv2eeJozueMowmfP45GfSE4WtmPkgOOhnzt8Hxw9O3rnqxbH76oa3f35gvH0dx+OONowuePozdfDQrB0f5/iaztk7V9srZP1vZJOo5fMkWBhDddU6sAAAAASUVORK5CYII=",
  //   pernaDireita: "iVBORw0KGgoAAAANSUhEUgAAADUAAABBCAIAAAD+N3vwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE6SURBVGhD7drbDoMgEEVR8f//mR5TU6tMFZgLpwk7afq6MjD6Yso5L8St+z9rCT/mEW4+REv8h/N9xznCw4cIiScfYiNefYiKKPgQD3EVKSnJ7vi25wszcX/+0RKP5zPVWnw6vT9K4vARPr/fxhKvPraLKMyPiiifLw/x5/0jId7tBwPxzodEYmQPPlQSI0f47EMDiVU+sRhirW/UrjTMbwix7Xzjic33L5jYsx+RxB4fEokedfpQSfQYYb9PzJyo8gVcRO38vIkG5+tKtLl/fkSz/XAimvmQSFRm6UMlUTlCYx+yJdr7xLqJLj7DXfGanxXR8XxNiL73T0903w8l0d2HRGJlET5UEitHGOQTqyHG+fouYuj8OojR59u6KwPuXxNxzH58E++58/sSXdOna/p0TZ+u6dO0LC9XpZZTEZhUbwAAAABJRU5ErkJggg==",
  //   pernaEsquerda: "iVBORw0KGgoAAAANSUhEUgAAADUAAABBCAIAAAD+N3vwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFBSURBVGhD7dpLjoUgEEBR7f3v2b4JHUOEVqC+A+7ANz0pqOjgndd1HYn7+fvNWmrfeZ55feB47vNdqgyPMvpuHKXz1TjK5XvgKJGvxVEWXxfHuy2F7z8cz3jfC45y7Uep/mQJ9rXDe3xPRfq6J/sozPd+7e5ifIM4CvCN48jbN4UjV98sjsL2o/SOIz9fO7xPHDn51nDk4eteu8HMfQs7UWfrE+LI0CfHkZVPBUcmPi0cme9HaQ1H+r52eMs4UvZ1T1aSpk/x2t2p+SxwpOMzwpGCzw5HUp8pjjT3o6SII5GvHZ4ujtZ9Djha9HWvnUUrPuudqJv2eeJozueMowmfP45GfSE4WtmPkgOOhnzt8Hxw9O3rnqxbH76oa3f35gvH0dx+OONowuePozdfDQrB0f5/iaztk7V9srZP1vZJOo5fMkWBhDddU6sAAAAASUVORK5CYII=",
  //   corpo: "iVBORw0KGgoAAAANSUhEUgAAADcAAACZCAIAAAAErzWPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADbSURBVHhe7dyxCoAgAEBB7f//2SAaovmConeLTvJAJ0HnWms4c85zdlCLb+f4blU6VTpVOlU6VTpVOlU6VTpVOlU6VTpVOv+rvF2/QLLSXjlddS6dKp0qnSqdKp0qnSqdKp0qnSqdKp0qnSqdKp0qnSqdKp0qnSqdKp0qnSqdKp0qnSqdKp0qnSqdKp0qnSqdKp0qnSqdKp0qnSqdByvhg4V23PlGJf5h5SHtuFOlU6VTpVOlU6VTpVOlU6VTpVOlU6VTpVOlU6VTpVOlU6VTpVOlU6VTpfOFyjF2+L4QKO5JqZ8AAAAASUVORK5CYII=",
  //   cabeca: "iVBORw0KGgoAAAANSUhEUgAAAG4AAABMCAIAAAADXRWRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI3SURBVHhe7dNBbhsxEARA///Tig61AAlpIzjqIRlg6rhNcYYN++fRQrrKmK4ypquM6SpjusqYs6r8+SuHTrV/Pz39nt8fY89Cyghx6W6r9/D6Agbss24DLy5m2A6LZnvoJ07fcOgTp5crH+x995z7JT++59xCtSM96x0nvua6d5xYpXCeB70QR7n6hXiJqmGe8kJcwIAX4nrr/kZkxQybyYrlx1h/JlvCyJmsUniGxWeyhQyeycokB1h5JlvO+JmsRm2Vgk0sMRDUiN1u2YFgK6sMBAUyV1tzIDiAhQaCtK4yJnCvBQeCY1hrIIjKV+nrYSx38TWqq4z59lKrDQSHsdxAkBOu0tcjWfHia05XGdNVxnx1o6Uuvh7MohdfQ7rKmK4ypquM6SpjusqYrjKmq4zpKmO+vc5SF1+PZMWLrzldZUxXGROu8klwGMsNBDmBG6128fUwlrv4GtVVxuSrfBIcw1oDQVTmUgsOBAew0ECQ1lXGxO615kCwlVUGggLJqy07EGxiiYGgRm2VT7LljJ/JaoRvt/JMtpbZA0GZ/ACLz2RLGDmTVSqZYf2ZrJhhM1mxqjEeMZOVMWYmq1c4yVNeiKNc/Y4T9Wonec07TnzNde84sUr5PM+659wv+fE95xZaNNL7PnH6nnOfOL3WuqleWcywHVbP9uICBuyz6X8hyqW7bd5DGf/EFcc4ayEl3XPuSEcv93/pKmO6ypiuMqarjOkqY7rKmK4ypquM6SpjusqQx+MP41xVciQPMzEAAAAASUVORK5CYII=",
  //   cabecaDesperta: "iVBORw0KGgoAAAANSUhEUgAAAG4AAABMCAIAAAADXRWRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJbSURBVHhe7ZoxbsMwDEXjHqF7x97/QB279wquAAaGIEuyLf1P0gnfUi+VyEdScoIs67o+AgQfz7/BNKESRqiEESphhEoYvm7wZVmeTzWcv2zYq+zr6+DNrI3KYX1VnDjVVomVmGM/XmoR8CTmGApVUnnSYz8YyCI86CoP8x8LgLTsDFyVnYRR+ypscRKiylaSjB0192rB+rSjnFtr2U7PwqF0ZTUBnQYx3BrflYbJJKob6fQmWKWtR8HKJlKlB4+CiU3ul2wmHgX9rWEq9zU39CjsA6A2JkalQ4+Cpk3My9CAyr+vb3n4/P2RBxJqZQaovBrrJjFnQGi+Tv/fdWzirx1SzQuKelTLs6ETEvcG39PKue/iFsyqnDnFh0/JqvdLxZgJuwW4Ky+NkmYnKsy49oC3OpF9jyugrfKFmXoZKk6cseke68f94XBmnZmADzFTOYlDlXcd8EKch6P2rl05RnTlPQiVMEIljFAJI1TCmFJZ3IDF/egN9vtGdCWMUAkDrNLtjCsENqvS/yecKoywY8Bh4FU6nHGdkAAq98PiyuY+GNKhFAMOA6PSbWOqtWQC1pUObWp6THAH3NCm/tZIldWam/fmBrUlE5hfsuVU3bHTyLEKAD/gtr1pWEjKWWll03Yg8AO+0XLH2LFTp1dQmVDI0INEgasy0UlVGAuAtOwMdJXCYebCYTCodRgoqUyctDCJiURBT6XAE2ooUdBWKWCFmksUbFRuzDh1YnDDWGXBoVlv+nJ8qbw13C/Z3opQCSNUwgiVMEIljFAJI1TCCJUwQiWMUAni8fgH/9JSmVNmqTUAAAAASUVORK5CYII=",
  //   nivel: 0,
  //   isVip: true,
  //   valorCash: 0
  // }

  @Input() public skin: Skin = {
    id: 0,
    descricao: '',
    bracoDireito: '',
    bracoEsquerdo: '',
    pernaDireita: '',
    pernaEsquerda: '',
    corpo: '',
    cabeca: '',
    cabecaDesperta: '',
    nivel: 0,
    isVip: true,
    valorCash: 0
  }
    @Input() alteracao: boolean

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if(this.skin.id == 0 || !this.skin.bracoDireito){
      document.querySelector('#bracoDireitoImg')['src'] = '.\\..\\..\\..\\..\\assets\\braco_d.jpg'
      document.querySelector('#bracoEsquerdoImg')['src'] = '.\\..\\..\\..\\..\\assets\\braco_e.jpg'
      document.querySelector('#pernaDireitaImg')['src'] = '.\\..\\..\\..\\..\\assets\\perna_d.jpg'
      document.querySelector('#pernaEsquerdaImg')['src'] = '.\\..\\..\\..\\..\\assets\\perna_e.jpg'
      document.querySelector('#corpoImg')['src'] = '.\\..\\..\\..\\..\\assets\\corpo.jpg'
      document.querySelector('#cabecaImg')['src'] = '.\\..\\..\\..\\..\\assets\\cabeca.jpg'
      document.querySelector('#cabecaDespertaImg')['src'] = '.\\..\\..\\..\\..\\assets\\cabeca.jpg'
    }else{
      document.querySelector('#bracoDireitoImg')['src'] = `data:image/png;base64, ${this.skin.bracoDireito}`
      document.querySelector('#bracoEsquerdoImg')['src'] = `data:image/png;base64, ${this.skin.bracoEsquerdo}`
      document.querySelector('#pernaDireitaImg')['src'] = `data:image/png;base64, ${this.skin.pernaDireita}`
      document.querySelector('#pernaEsquerdaImg')['src'] = `data:image/png;base64, ${this.skin.pernaEsquerda}`
      document.querySelector('#corpoImg')['src'] = `data:image/png;base64, ${this.skin.corpo}`
      document.querySelector('#cabecaImg')['src'] = `data:image/png;base64, ${this.skin.cabeca}`
      document.querySelector('#cabecaDespertaImg')['src'] = `data:image/png;base64, ${this.skin.cabecaDesperta}`
    }
  }
}
