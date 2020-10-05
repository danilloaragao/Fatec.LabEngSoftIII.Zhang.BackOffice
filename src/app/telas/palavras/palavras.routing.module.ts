import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlteracaoComponent } from './alteracao/alteracao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PalavrasComponent } from './palavras.component';
import { ListaPalavraComponent } from './pesquisa/lista-palavra/lista-palavra.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PorIdComponent } from './pesquisa/por-id/por-id.component';
import { PorTemaComponent } from './pesquisa/por-tema/por-tema.component';
import { PorTrechoComponent } from './pesquisa/por-trecho/por-trecho.component';

const palavrasRoutes =[
    {path: 'palavras', component: PalavrasComponent, children :[
        {path: 'alteracao', component: AlteracaoComponent },
        {path: 'cadastro', component: CadastroComponent },
        {path: 'pesquisa', component: PesquisaComponent, children:[
            {path: 'todas', component: ListaPalavraComponent },
            {path: 'porId', component: PorIdComponent },
            {path: 'porTema', component: PorTemaComponent },
            {path: 'porTrecho', component: PorTrechoComponent },
        ] },
        {path: '**', redirectTo: '/palavras'}
    ]}
];

@NgModule({
    imports:[
        RouterModule.forChild(palavrasRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class PalavrasRoutingModule{}