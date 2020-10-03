import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SkinsComponent } from './skins.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        SkinsComponent
    ],
    declarations: [
        SkinsComponent
    ],
    providers: [],
})

export class SkinsModule {}