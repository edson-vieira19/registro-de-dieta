import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './componente1-rodape/rodape/rodape.component';
import { CabecalhoComponent } from './componente2-cabecalho/cabecalho/cabecalho.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { FormsModule } from '@angular/forms';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { DiarioAlimentarComponent } from './diario-alimentar/diario-alimentar.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    CabecalhoComponent,
    TelaLoginComponent,
    TelaCadastroComponent,
    DiarioAlimentarComponent,
    // FormsModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
