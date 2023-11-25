import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Model/usuario';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private router: Router) { }

  navigateToDiarioAlimentar(usuario:Usuario){

    this.router.navigate(['/diario-alimentar', usuario.id.toString()]);

  }

  navigateToAdicionarAlimento(usuario:Usuario){

    this.router.navigate(['/adicionar-alimento',usuario.id.toString()]);

  }

}
