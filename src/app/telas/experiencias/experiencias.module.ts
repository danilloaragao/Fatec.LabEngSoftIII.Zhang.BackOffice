import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ExperienciasComponent } from './experiencias.component';
import { ExperienciasRoutingModule } from './experiencias.routing.module';
import { AlteracaoComponent } from './alteracao/alteracao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ExperienciasRoutingModule
    ],
    exports: [
        ExperienciasComponent
    ],
    declarations: [
        ExperienciasComponent,
        AlteracaoComponent,
        CadastroComponent,
        DetalheComponent,
        PesquisaComponent
    ],
    providers: [],
})

export class ExperienciasModule {}