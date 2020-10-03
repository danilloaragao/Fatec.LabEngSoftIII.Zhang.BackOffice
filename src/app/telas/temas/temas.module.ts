import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { TemasComponent } from './temas.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        TemasComponent
    ],
    declarations: [
        TemasComponent
    ],
    providers: [],
})

export class TemasModule {}