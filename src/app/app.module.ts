import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AdministradorModule } from './telas/administrador/administrador.module';
import { LoginModule } from './telas/login/login.module';
import { PalavrasModule } from './telas/palavras/palavras.module';
import { SkinsModule } from './telas/skins/skins.module';
import { TemasModule } from './telas/temas/temas.module';
import { ExperienciasModule } from './telas/experiencias/experiencias.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AdministradorModule,
    LoginModule,
    PalavrasModule,
    SkinsModule,
    TemasModule,
    ExperienciasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
