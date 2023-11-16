import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './../Model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private router: Router) { 

  }

  navigateToDiarioAlimentar(usuario:Usuario){

    this.router.navigate(['/diario-alimentar', usuario.id.toString()]);

  }

  navigateToAdicionarAlimento(usuario:Usuario){

    this.router.navigate(['/adicionar-alimento',usuario.id.toString()]);

  }

  salvar(usuario: Usuario) {

    localStorage.setItem(usuario.id.toString(), JSON.stringify(usuario));
  
  }

  //retorna um usuario do local storage
  buscarNoLocalStorage(userId:string): any{

    const usuarioStringJson = localStorage.getItem(userId);
      if(usuarioStringJson)
    return  JSON.parse(usuarioStringJson); 
    
  }





  imprimeConsole(usuario:Usuario){

    console.log(usuario.id)
    console.log(usuario.nome)
    console.log(usuario.email)
    console.log(usuario.idade)
    console.log(usuario.peso)
    console.log(usuario.altura)
    console.log(usuario.atividade)
    console.log(usuario.genero)
    usuario.genero;
    console.log(usuario.necessidadeCalorica)
    console.log(usuario.cafeDaManha)
    console.log(usuario.almoco)
    console.log(usuario.cafeDaTarde)
    console.log(usuario.jantar)
  }

}
