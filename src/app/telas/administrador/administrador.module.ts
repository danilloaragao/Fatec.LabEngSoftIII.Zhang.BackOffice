import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AdministradorComponent } from './administrador.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
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