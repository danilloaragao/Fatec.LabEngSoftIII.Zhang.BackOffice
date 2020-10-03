
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './telas/login/login.component';
import { AdministradorComponent } from './telas/administrador/administrador.component';
import { PalavrasComponent } from './telas/palavras/palavras.component';
import { SkinsComponent } from './telas/skins/skins.component';
import { TemasComponent } from './telas/temas/temas.component';


const appRoutes: Routes = [
  {path:'', component: LoginComponent},
  {path:'administrador', component: AdministradorComponent},
  {path:'palavras', component: PalavrasComponent},
  {path:'skins', component: SkinsComponent},
  {path:'temas', component: TemasComponent},
  {path:'**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }