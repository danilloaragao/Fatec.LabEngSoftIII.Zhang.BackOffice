import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PalavrasComponent } from './palavras.component';
import { PalavrasRoutingModule } from './palavras.routing.module';
import { AlteracaoComponent } from './alteracao/alteracao.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PalavrasRoutingModule
    ],
    exports: [
        PalavrasComponent
    ],
    declarations: [
        PalavrasComponent,
        AlteracaoComponent,
        PesquisaComponent,
        CadastroComponent
    ],
    providers: [],
})

export class PalavrasModule {}