import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { DiarioAlimentarComponent } from './diario-alimentar/diario-alimentar.component';
import { AlterarAlimentoComponent } from './alterar-alimento/alterar-alimento.component';
import { AdicionarAlimentoComponent } from './adicionar-alimento/adicionar-alimento.component';

const routes: Routes = [
  {path : 'login', component: TelaLoginComponent},
  {path: 'cadastro', component: TelaCadastroComponent},
  {path: 'diario-alimentar', component:DiarioAlimentarComponent },
  {path: 'adicionar-alimento', component:AdicionarAlimentoComponent},
  {path: 'alterar-alimento', component:AlterarAlimentoComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
