import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { DiarioAlimentarComponent } from './diario-alimentar/diario-alimentar.component';

const routes: Routes = [
  {path : 'login', component: TelaLoginComponent},
  {path: 'cadastro', component: TelaCadastroComponent},
  {path: 'diario-alimentar', component:DiarioAlimentarComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
