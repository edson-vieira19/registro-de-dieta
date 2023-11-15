import { Router } from '@angular/router';
import { Usuario } from './../Model/usuario';
import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit, AfterViewInit{

    usuario!: Usuario

    constructor(private router: Router){}

    ngOnInit(): void {

      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems);
      
      this.usuario = new Usuario('','',null, null, null,1.2);
      
      
    }

    ngAfterViewInit(): void {
      //
    }

    //envia id do usuario via rota e armazena o web storage
    navigateToDiarioAlimentar(usuario: any) {

      this.usuario.calculaNecessidadeCalorica();

      localStorage.setItem(this.usuario.id.toString(), JSON.stringify(this.usuario));

      this.router.navigate(['/diario-alimentar', this.usuario.id.toString()]);
      
    }


}
