import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Trash2, Edit3 } from 'angular-feather/icons';

import { RouterModule } from '@angular/router';
import { ExperienciasComponent } from './experiencias.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        FeatherModule.pick({ Trash2, Edit3 })
    ],
    exports: [
        ExperienciasComponent
    ],
    declarations: [
        ExperienciasComponent,
        DetalheComponent
        ],
    providers: [],
})

export class ExperienciasModule {}