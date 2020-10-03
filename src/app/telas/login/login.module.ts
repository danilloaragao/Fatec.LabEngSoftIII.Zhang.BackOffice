import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        LoginComponent
    ],
    declarations: [
        LoginComponent
    ],
    providers: [],
})

export class LoginModule {}