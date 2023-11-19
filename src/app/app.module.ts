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
import { AdicionarAlimentoComponent } from './adicionar-alimento/adicionar-alimento.component';
import { AlterarAlimentoComponent } from './alterar-alimento/alterar-alimento.component';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    CabecalhoComponent,
    TelaLoginComponent,
    TelaCadastroComponent,
    DiarioAlimentarComponent,
    AdicionarAlimentoComponent,
    AlterarAlimentoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
