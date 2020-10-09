import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SkinsComponent } from './skins.component';
import { SkinsRoutingModule } from './skins.routing.module';
import { AlteracaoComponent } from './alteracao/alteracao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ListaSkinsComponent } from './pesquisa/lista-skins/lista-skins.component';
import { PorDescricaoComponent } from './pesquisa/por-descricao/por-descricao.component';
import { PorIdComponent } from './pesquisa/por-id/por-id.component';
import { PorNivelComponent } from './pesquisa/por-nivel/por-nivel.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SkinsRoutingModule
    ],
    exports: [
        SkinsComponent
    ],
    declarations: [
        SkinsComponent,
        AlteracaoComponent,
        CadastroComponent,
        DetalheComponent,
        PesquisaComponent,
        ListaSkinsComponent,
        PorDescricaoComponent,
        PorIdComponent,
        PorNivelComponent
    ],
    providers: [],
})

export class SkinsModule {}