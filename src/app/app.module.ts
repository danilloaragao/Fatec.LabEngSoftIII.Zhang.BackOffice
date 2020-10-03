import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AdministradorModule } from './telas/administrador/administrador.module';
import { LoginModule } from './telas/login/login.module';
import { PalavrasModule } from './telas/palavras/palavras.module';
import { SkinsModule } from './telas/skins/skins.module';
import { TemasModule } from './telas/temas/temas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministradorModule,
    LoginModule,
    PalavrasModule,
    SkinsModule,
    TemasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
