import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../Model/usuario';
import { NavigateService } from '../services/navigate.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css'],
  providers: [LoginService],
})
export class TelaLoginComponent implements OnInit {
  usuario!: Usuario; //| null = null;
  nome: string;
  email: string;
  mensagem:string;

  imageUrl: string = 'assets/resources/images/salmon-with-fresh-salad.jpg';

  constructor(
    private loginService: LoginService,
    private usuarioService: UsuarioService,
    private navigateService: NavigateService
  ) {
    this.nome = '';
    this.email = '';
    this.mensagem ='';
  }

  ngOnInit(): void {

    //carrega os usuario do db.json e salva no local storage
    //-----------------------------------------------
    this.loginService.buscarTodosUsuarios().subscribe({
      next: (usuarios: Usuario[]) => {
        usuarios.forEach((usuario) => {
          localStorage.setItem(usuario.id.toString(), JSON.stringify(usuario));
        });
      },
      error: (error) => {
        console.error('lista de usuarios vazia no db.json', error);
      },
    });
    //---------------------------------------------------------


  }

  //busca usuario no localStorage com nome e email correspondente
  buscar() {

  var retorno = this.usuarioService.buscarPorNomeEmail(this.nome,this.email);
  if(retorno){
    this.usuario = retorno;

    this.navigateService.navigateToDiarioAlimentar(this.usuario);

  }

  else{

    this.mensagem = "Usuario ainda não cadastrado"
  }




  }

}
