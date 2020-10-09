import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { TemasComponent } from './temas.component';
import { TemasRoutingModule } from './temas.routing.module';
import { AlteracaoComponent } from './alteracao/alteracao.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TemasRoutingModule
    ],
    exports: [
        TemasComponent
    ],
    declarations: [
        TemasComponent,
        AlteracaoComponent,
        DetalheComponent,
        CadastroComponent,
        PesquisaComponent,
        
    ],
    providers: [],
})

export class TemasModule {}