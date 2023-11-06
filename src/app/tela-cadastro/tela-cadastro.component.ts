import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Model/usuario';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit{

    usuario!: Usuario;

    ngOnInit(): void {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems);
    }


   






}
