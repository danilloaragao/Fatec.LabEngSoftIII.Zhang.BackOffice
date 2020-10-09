import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Trash2, Edit3 } from 'angular-feather/icons';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { TemasComponent } from './temas.component';
import { DetalheComponent } from './detalhe/detalhe.component';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        FeatherModule.pick({ Trash2, Edit3 })
        ],
    exports: [
        TemasComponent
    ],
    declarations: [
        TemasComponent,
        DetalheComponent        
    ],
    providers: [],
})

export class TemasModule {}