import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SkinsComponent } from './skins.component';
import { SkinsRoutingModule } from './skins.routing.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SkinsRoutingModule
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