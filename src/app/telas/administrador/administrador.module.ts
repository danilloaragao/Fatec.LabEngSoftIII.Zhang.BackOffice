import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AdministradorComponent } from './administrador.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        AdministradorComponent
    ],
    declarations: [
        AdministradorComponent
    ],
    providers: [],
})

export class AdministradorModule {}