import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Trash2, Edit3 } from 'angular-feather/icons';

import { RouterModule } from '@angular/router';
import { PalavrasComponent } from './palavras.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        FeatherModule.pick({ Trash2, Edit3 })
    ],
    exports: [
        PalavrasComponent,
        FeatherModule
    ],
    declarations: [
        PalavrasComponent,
        DetalhesComponent
    ],
    providers: [],
})

export class PalavrasModule {}