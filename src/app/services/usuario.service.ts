import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './../Model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}

  salvar(usuario: Usuario) {
    localStorage.setItem(usuario.id.toString(), JSON.stringify(usuario));
  }

  //buscar por id
  buscarNoLocalStorage(userId: string): any {
    const usuarioStringJson = localStorage.getItem(userId);
    if (usuarioStringJson) return JSON.parse(usuarioStringJson);
  }


  //buscar por nome e email
  buscarPorNomeEmail(nome: string, email: string):any {
    const usuarios = Object.values(localStorage).map(
      (item) => JSON.parse(item) as Usuario
    )
    const usuario = usuarios.find((u) => u.nome.toLowerCase() === nome.toLowerCase() && u.email.toLowerCase() === email.toLowerCase());

    if (usuario) {
      console.log(JSON.stringify(usuario));
      return usuario;
    } else {
      console.error(
        'Nenhum usuário correspondente encontrado no localStorage.'
      );
    }

    return usuario;
  }

  imprimeConsole(usuario: Usuario) {
    console.log(usuario.id);
    console.log(usuario.nome);
    console.log(usuario.email);
    console.log(usuario.idade);
    console.log(usuario.peso);
    console.log(usuario.altura);
    console.log(usuario.atividade);
    console.log(usuario.genero);
    usuario.genero;
    console.log(usuario.necessidadeCalorica);
    console.log(usuario.cafeDaManha);
    console.log(usuario.almoco);
    console.log(usuario.cafeDaTarde);
    console.log(usuario.jantar);
  }
}
