import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { NavigateService } from '../services/navigate.service';
import { AlimentoService } from '../services/alimento.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../Model/usuario';
import { Alimento } from '../Model/alimento';

@Component({
  selector: 'app-alterar-alimento',
  templateUrl: './alterar-alimento.component.html',
  styleUrls: ['./alterar-alimento.component.css'],
})
export class AlterarAlimentoComponent implements OnInit {

  usuario!: Usuario;

  alimento!: Alimento;

  qualRefeicao!: string;

  totalCalorias!: number;

  sugestoes: any[] = [];

  constructor(
    private service: UsuarioService,
    private navigateService: NavigateService,
    private alimentoService: AlimentoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);


    this.alimento = new Alimento('', null, null, null, null);

    this.route.params.subscribe((params) => {
      //recupera id do usuario
      const userId = +params['id'];
      this.usuario = this.service.buscarNoLocalStorage(userId.toString());
    });






  } //fim onInit

  voltarParaDiarioAlimentar(usuario: Usuario) {
    this.navigateService.navigateToDiarioAlimentar(usuario);
  }



}
