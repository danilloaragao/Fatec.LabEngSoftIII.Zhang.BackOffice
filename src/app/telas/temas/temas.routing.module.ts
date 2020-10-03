import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlteracaoComponent } from './alteracao/alteracao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TemasComponent } from './temas.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

const temasRoutes =[
    {path: 'temas', component: TemasComponent, children :[
        {path: 'alteracao', component: AlteracaoComponent },
        {path: 'cadastro', component: CadastroComponent },
        {path: 'pesquisa', component: PesquisaComponent },
        {path: '**', redirectTo: '/temas'}
    ]}
];

@NgModule({
    imports:[
        RouterModule.forChild(temasRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class TemasRoutingModule{}