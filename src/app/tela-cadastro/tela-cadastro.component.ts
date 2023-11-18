import { UsuarioService } from './../services/usuario.service';
import { Usuario } from './../Model/usuario';
import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit, AfterViewInit{

    usuario!:Usuario;

    constructor(private usuarioService: UsuarioService ){

    }

    ngOnInit(): void {

      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems);
        
      this.usuario = new Usuario('','',null, null, null,0,'masculino');
    }

    ngAfterViewInit(): void {
      //
    }

    navigateToDiarioAlimentar(usuario: any) {

      this.usuario.calculaNecessidadeCalorica();

      this.usuarioService.salvar(this.usuario);

      this.usuarioService.navigateToDiarioAlimentar(this.usuario)
      
    }

    imprimeConsole(){

      this.usuarioService.imprimeConsole(this.usuario);

    }



}
