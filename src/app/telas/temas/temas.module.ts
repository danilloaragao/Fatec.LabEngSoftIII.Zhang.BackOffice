import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { TemasComponent } from './temas.component';
import { DetalheComponent } from './detalhe/detalhe.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
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