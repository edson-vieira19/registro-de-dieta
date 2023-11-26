import { Alimento } from './../Model/alimento';
import { Usuario } from './../Model/usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { NavigateService } from '../services/navigate.service';
import { AlimentoService } from '../services/alimento.service';

@Component({
  selector: 'app-adicionar-alimento',
  templateUrl: './adicionar-alimento.component.html',
  styleUrls: ['./adicionar-alimento.component.css'],
})
export class AdicionarAlimentoComponent implements OnInit {
  usuario!: Usuario;

  alimento!: Alimento;

  qualRefeicao!: string;

  totalCalorias!: number;

  sugestoes: any[] = [];

  constructor(
    private service: UsuarioService,
    private alimentoService: AlimentoService,
    private navigateService: NavigateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);

    //estou inicialiazndo com null os campos numericos devido a problema de
    // renderização do formulario
    this.alimento = new Alimento('', null, null, null, null);

    this.route.params.subscribe((params) => {
      //recupera id do usuario
      const userId = +params['id'];
      this.usuario = this.service.buscarNoLocalStorage(userId.toString());
    });
  }

  //adiciona um alimento em um das refeições
  adicionarAlimento() {
    this.alimento.calculaCalorias();
    switch (this.qualRefeicao) {
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

    //salva no db.json usando promisse
    this.alimento.nome = this.alimento.nome.toLowerCase();

    this.alimentoService.getAlimento(this.alimento.nome)
        .subscribe((alimentoExistente) => {
          if (alimentoExistente) {
            console.log('Alimento com o mesmo nome já existe. Não será salvo.');
          } else {
            this.alimentoService
              .salvarAlimentoNoDbJson(this.alimento)
              .then((resultado) => {
                console.log(resultado);
              })
              .catch((erro) => {
                console.log('Erro ao salvar alimento');
              });
          }
        });

    // this.alimentoService
    //   .salvarAlimentoNoDbJson(this.alimento)
    //   .then((resultado) => {
    //     console.log(resultado);
    //   })
    //   .catch((erro) => {
    //     console.log('Erro ao salvar alimento');
    //   });

    this.navigateService.navigateToDiarioAlimentar(this.usuario);
  }

  voltarParaDiarioAlimentar(usuario: Usuario) {
    this.navigateService.navigateToDiarioAlimentar(usuario);
  }

  buscarAlimentoPorNome(nome: string): void {
    console.log(nome);
    this.alimentoService.getAlimento(nome).subscribe((alimento) => {
      if (alimento && alimento.length > 0) {
        this.preencherCampos(alimento[0]);
        console.log(alimento);
      } else {
        // Limpar os campos se o alimento não for encontrado
        this.limparCampos();
      }
    });
  }

  private preencherCampos(alimento: any): void {
    this.alimento.carboidrato = alimento.carboidrato;
    this.alimento.proteina = alimento.proteina;
    this.alimento.gordura = alimento.gordura;
    this.alimento.quantidade = alimento.quantidade;
  }

  private limparCampos(): void {
    // Limpar os campos do formulário
    this.alimento.carboidrato = null;
    this.alimento.proteina = null;
    this.alimento.gordura = null;
    this.alimento.quantidade = null;
  }

  buscarSugestoes(termo: string): void {
    if (termo.length >= 1) {
      this.alimentoService
        .getAlimentosSugestao(termo)
        .subscribe((sugestoes) => {
          this.sugestoes = sugestoes;
        });
    } else {
      this.sugestoes = [];
    }
  }

  selecionarSugestao(sugestao: any): void {
    this.alimento.nome = sugestao.nome;
    this.sugestoes = [];

    this.buscarAlimentoPorNome(this.alimento.nome);
  }
}
