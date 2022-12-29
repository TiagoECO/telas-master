import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { CiclosComponent } from './componentes/ciclos/ciclos.component';
import { UnidadeComponent } from './componentes/unidade/unidade.component';
import { FrenteComponent } from './componentes/frente/frente.component';
import { DetalhamentoComponent } from './componentes/detalhamento/detalhamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CiclosComponent,
    UnidadeComponent,
    FrenteComponent,
    DetalhamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
