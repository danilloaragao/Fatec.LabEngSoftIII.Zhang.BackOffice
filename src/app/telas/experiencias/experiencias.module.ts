import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ExperienciasComponent } from './experiencias.component';
import { ExperienciasRoutingModule } from './experiencias.routing.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ExperienciasRoutingModule
    ],
    exports: [
        ExperienciasComponent
    ],
    declarations: [
        ExperienciasComponent
    ],
    providers: [],
})

export class ExperienciasModule {}