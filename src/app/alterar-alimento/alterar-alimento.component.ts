import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { NavigateService } from '../services/navigate.service';
import { AlimentoService } from '../services/alimento.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../Model/usuario';
import { Alimento } from '../Model/alimento';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alterar-alimento',
  templateUrl: './alterar-alimento.component.html',
  styleUrls: ['./alterar-alimento.component.css'],
})
export class AlterarAlimentoComponent implements OnInit, OnDestroy {

  inscricoes: Subscription[] = [];

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

    this.inscricoes.push(
      this.route.params.subscribe((params) => {
        //recupera id do usuario
        const userId = +params['id'];
        this.usuario = this.service.buscarNoLocalStorage(userId.toString());
      })
    );
  } //fim onInit

  voltarParaDiarioAlimentar(usuario: Usuario) {
    this.navigateService.navigateToDiarioAlimentar(usuario);
  }

  ngOnDestroy(): void {
    //fecha todos os subscribe
    for (let inscricao of this.inscricoes) {
      inscricao.unsubscribe();
    }
  }

  buscarAlimentoPorNome(nome: string): void {
    console.log(nome);
    this.inscricoes.push(
      this.alimentoService.getAlimento(nome).subscribe((alimento) => {
        if (alimento && alimento.length > 0) {
          this.preencherCampos(alimento[0]);
          console.log(alimento);
        } else {
          this.limparCampos();
        }
      })
    );
  }

  private preencherCampos(alimento: any): void {
    this.alimento.carboidrato = alimento.carboidrato;
    this.alimento.proteina = alimento.proteina;
    this.alimento.gordura = alimento.gordura;
    this.alimento.quantidade = alimento.quantidade;
  }
  private limparCampos(): void {
    this.alimento.carboidrato = null;
    this.alimento.proteina = null;
    this.alimento.gordura = null;
    this.alimento.quantidade = null;
  }

  buscarSugestoes(termo: string): void {
    if (termo.length >= 1) {
      this.inscricoes.push(
        this.alimentoService
          .getAlimentosSugestao(termo)
          .subscribe((sugestoes) => {
            this.sugestoes = sugestoes;
          })
      );
    } else {
      this.sugestoes = [];
    }
  }

  selecionarSugestao(sugestao: any): void {
    this.alimento.nome = sugestao.nome;
    this.sugestoes = [];

    this.buscarAlimentoPorNome(this.alimento.nome);
  }

  atualizarAlimento() {

    this.alimento.calculaCalorias();

    this.alimento.nome = this.alimento.nome.toLowerCase();

    switch (this.qualRefeicao) {
      case 'cafe-manha':
        for (let i = 0; i < this.usuario.cafeDaManha.alimentos.length; i++) {
          if (
            this.alimento.nome === this.usuario.cafeDaManha.alimentos[i].nome
          ) {
            this.usuario.cafeDaManha.alimentos[i] = this.alimento;
          } else {
            this.usuario.cafeDaManha.alimentos.push(this.alimento);
          }
        }
        break;

      case 'almoco':
        for (let i = 0; i < this.usuario.almoco.alimentos.length; i++) {
          if (this.alimento.nome === this.usuario.almoco.alimentos[i].nome) {
            this.usuario.almoco.alimentos[i] = this.alimento;
          } else {
            this.usuario.almoco.alimentos.push(this.alimento);
          }
        }
        break;
      case 'cafe-tarde':
        for (let i = 0; i < this.usuario.cafeDaTarde.alimentos.length; i++) {
          if (
            this.alimento.nome === this.usuario.cafeDaTarde.alimentos[i].nome
          ) {
            this.usuario.cafeDaTarde.alimentos[i] = this.alimento;
          } else {
            this.usuario.cafeDaTarde.alimentos.push(this.alimento);
          }
        }
        break;
      case 'jantar':
        for (let i = 0; i < this.usuario.jantar.alimentos.length; i++) {
          if (this.alimento.nome === this.usuario.jantar.alimentos[i].nome) {
            this.usuario.jantar.alimentos[i] = this.alimento;
          } else {
            this.usuario.jantar.alimentos.push(this.alimento);
          }
        }
        break;
    }

    this.service.salvar(this.usuario);

    //caso ja exista atualiza no "banco"
    this.inscricoes.push(
      this.alimentoService
        .getAlimento(this.alimento.nome)
        .subscribe((alimentoExistente) => {
          if (alimentoExistente.length > 0) {
            const id = alimentoExistente[0].id;
            console.log(alimentoExistente[0]);
            console.log('id do alimento: ' + alimentoExistente[0].id);
            this.inscricoes.push(
              this.alimentoService
                .atualizarAlimentoNoDbJson(id, this.alimento)
                .subscribe(() => {
                  console.log('Alimento Atualizado');
                })
            );
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
        })
    );

    this.navigateService.navigateToDiarioAlimentar(this.usuario);

  } //fim atualizaAlimento

  
  excluiAlimento(event: Event){
    event.preventDefault()

    this.alimento.nome = this.alimento.nome.toLowerCase();

    switch (this.qualRefeicao) {
      case 'cafe-manha':
        for (let i = 0; i < this.usuario.cafeDaManha.alimentos.length; i++) {
          if (this.alimento.nome == this.usuario.cafeDaManha.alimentos[i].nome) {
            this.usuario.cafeDaManha.alimentos.splice(i,1);
            alert('alimento: ' + this.alimento.nome + ' removido do' 
            + '  café da manha')
            this.service.salvar(this.usuario);
            break
          }
        }
        break;
      case 'almoco':
        for (let i = 0; i < this.usuario.almoco.alimentos.length; i++) {
          if (this.alimento.nome == this.usuario.almoco.alimentos[i].nome) {
            this.usuario.almoco.alimentos.splice(i,1);
            alert('alimento: ' + this.alimento.nome + ' removido do' 
            + ' almoço')
            this.service.salvar(this.usuario);
            break
          }
        }
        break;
      case 'cafe-tarde':
        for (let i = 0; i < this.usuario.cafeDaTarde.alimentos.length; i++) {
          if (this.alimento.nome == this.usuario.cafeDaTarde.alimentos[i].nome) {
            this.usuario.cafeDaTarde.alimentos.splice(i,1);
            alert('alimento: ' + this.alimento.nome + ' removido do' 
            + ' café da tarde')
            this.service.salvar(this.usuario);
            break
          }
        }
        break;
      case 'jantar':
        for (let i = 0; i < this.usuario.jantar.alimentos.length; i++) {
          if (this.alimento.nome == this.usuario.jantar.alimentos[i].nome) {
            this.usuario.jantar.alimentos.splice(i,1);
            alert('alimento: ' + this.alimento.nome + ' removido do' 
            + ' jantar')
            this.service.salvar(this.usuario);
            break
          }
        }
        break;

    } //fim switch-case


   /* 
    Para excluir um alimento do bd.json também

    this.inscricoes.push(
      this.alimentoService
        .getAlimento(this.alimento.nome)
        .subscribe((alimentoExistente) => {
          if (alimentoExistente.length > 0) {
            const id = alimentoExistente[0].id;
            this.inscricoes.push(
              this.alimentoService
                .excluirAlimentoDoDbJson(id)
                .subscribe(() => {
                  console.log('Alimento Excluido!');
                })
            );
          } else {
            console.log('alimento nao excluido')
          }
        })
    ); */


      this.navigateService.navigateToDiarioAlimentar(this.usuario)

  } //fim exluirAlimento

}
