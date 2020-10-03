import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlteracaoComponent } from './alteracao/alteracao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PalavrasComponent } from './palavras.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

const palavrasRoutes =[
    {path: 'palavras', component: PalavrasComponent, children :[
        {path: 'alteracao', component: AlteracaoComponent },
        {path: 'cadastro', component: CadastroComponent },
        {path: 'pesquisa', component: PesquisaComponent },
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