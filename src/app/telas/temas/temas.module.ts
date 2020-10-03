import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { TemasComponent } from './temas.component';
import { TemasRoutingModule } from './temas.routing.module';


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
        TemasComponent
    ],
    providers: [],
})

export class TemasModule {}