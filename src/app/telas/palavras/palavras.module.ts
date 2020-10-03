import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PalavrasComponent } from './palavras.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        PalavrasComponent
    ],
    declarations: [
        PalavrasComponent
    ],
    providers: [],
})

export class PalavrasModule {}