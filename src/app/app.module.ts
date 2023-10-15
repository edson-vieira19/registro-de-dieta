import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './componente1-rodape/rodape/rodape.component';
import { CabecalhoComponent } from './componente2-cabecalho/cabecalho/cabecalho.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
