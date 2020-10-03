import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlteracaoComponent } from './alteracao/alteracao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SkinsComponent } from './skins.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

const skinsRoutes =[
    {path: 'skins', component: SkinsComponent, children :[
        {path: 'alteracao', component: AlteracaoComponent },
        {path: 'cadastro', component: CadastroComponent },
        {path: 'pesquisa', component: PesquisaComponent },
        {path: '**', redirectTo: '/skins'}
    ]}
];

@NgModule({
    imports:[
        RouterModule.forChild(skinsRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class SkinsRoutingModule{}