import { Alimento } from './../Model/alimento';
import { Usuario } from './../Model/usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-adicionar-alimento',
  templateUrl: './adicionar-alimento.component.html',
  styleUrls: ['./adicionar-alimento.component.css']
})
export class AdicionarAlimentoComponent implements OnInit {

  usuario!:Usuario;

  alimento!:Alimento;

  qualRefeicao!:string;

  totalCalorias!:number;

  constructor(private service:UsuarioService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);

    //estou inicialiazndo com null os campos numericos devido a problema de
    // renderização do formulario
    this.alimento = new Alimento('',null,null,null,null);

    this.route.params.subscribe(params => {
      //recupera id do usuario
      const userId = +params['id'];
      this.usuario = this.service.buscarNoLocalStorage(userId.toString());
   
    });

  }

  adicionarAlimento(){

    this.alimento.calculaCalorias();

    switch(this.qualRefeicao){
      case 'cafe-manha':
        this.usuario.cafeDaManha.alimentos.push(this.alimento);
          break;
      case 'almoco':
        this.usuario.almoco.alimentos.push(this.alimento);
        break;
      case 'cafe-tarde':
        this.usuario.cafeDaTarde.alimentos.push(this.alimento);  
        break;
      case 'jantar':
        this.usuario.jantar.alimentos.push(this.alimento);
      break;
    }  
    this.service.salvar(this.usuario);
    this.service.navigateToDiarioAlimentar(this.usuario);
  }





}