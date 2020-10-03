import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlteracaoComponent } from './alteracao/alteracao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ExperienciasComponent } from './experiencias.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

const experienciasRoutes =[
    {path: 'experiencias', component: ExperienciasComponent, children :[
        {path: 'alteracao', component: AlteracaoComponent },
        {path: 'cadastro', component: CadastroComponent },
        {path: 'pesquisa', component: PesquisaComponent },
        {path: '**', redirectTo: '/experiencias'}
    ]}
];

@NgModule({
    imports:[
        RouterModule.forChild(experienciasRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class ExperienciasRoutingModule{}