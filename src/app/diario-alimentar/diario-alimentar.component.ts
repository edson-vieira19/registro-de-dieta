import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Chart from 'chart.js/auto';
import { Usuario } from '../Model/usuario';
import { UsuarioService } from '../services/usuario.service';
import { AlimentoService } from '../services/alimento.service';
import { NavigateService } from '../services/navigate.service';

declare var M: any;

@Component({
  selector: 'app-diario-alimentar',
  templateUrl: './diario-alimentar.component.html',
  styleUrls: ['./diario-alimentar.component.css'],
})
export class DiarioAlimentarComponent implements OnInit, AfterViewInit {
  @ViewChild('donutchart') donutChart!: ElementRef;

  usuario!: Usuario;

  //valor calorico total do usuario
  caloricNeeds: any;

  //calorias dos alimentos adicionados
  totalCaloriasConsumidas: number;
  totalCaloriasAlmoco: number;
  totalCaloriasCafeManha: number;
  totalCaloriasCafeTarde: number;
  totalCaloriasJantar: number;

  //valores para o grafico, % em relacao ao total consumido
  totalCarboidrato: number;
  totalProteina: number;
  totalGordura: number;

  constructor(
    private service: UsuarioService,
    private alimentoService: AlimentoService,
    private navigateService: NavigateService,
    private route: ActivatedRoute
  ) {

    //inicializacao das propriedades
    this.totalCaloriasConsumidas = 0;
    this.totalCaloriasAlmoco = 0;
    this.totalCaloriasCafeManha = 0;
    this.totalCaloriasCafeTarde = 0;
    this.totalCaloriasJantar = 0;

    this.totalCarboidrato = 0;
    this.totalProteina = 0;
    this.totalGordura = 0;
  }

  ngOnInit(): void {

    //inicializacao do collapsible
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
      accordion: false,
    });

    //id do usuario de acordo com a rota
    this.route.params.subscribe((params) => {
      const userId = +params['id'];
      this.usuario = this.service.buscarNoLocalStorage(userId.toString());
      this.caloricNeeds = this.usuario.necessidadeCalorica;
    });

    //chamada de métodos para obter propriedades
    //dos alimentos
    this.totalCaloriasCafeManha =
      this.alimentoService.somaTotalCaloriasCafeManha(this.usuario);
    this.totalCaloriasAlmoco = this.alimentoService.somaTotalCaloriasAlmoco(
      this.usuario
    );
    this.totalCaloriasCafeTarde =
      this.alimentoService.somaTotalCaloriasCafeTarde(this.usuario);
    this.totalCaloriasJantar = this.alimentoService.somaTotalCaloriasJantar(
      this.usuario
    );
    this.somaTotalCaloriasConsumidas();
    this.calculaTotalCarboidrato();
    this.calculaTotalProteina();
    this.calculaTotalGordura();
    

  } //fim do ngOnInit

  ngAfterViewInit(): void {
    
    //inicializacao do grafico
    const ctx = this.donutChart.nativeElement.getContext('2d');

    var chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['carboidrato', 'proteina', 'gordura'],
        datasets: [
          {
            data: [
              this.totalCarboidrato,
              this.totalProteina,
              this.totalGordura,
            ],
            backgroundColor: ['#E3DC38', '#E44848', '#3899DF'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
              display: true,
              text: 'Distribuição dos macronutrientes:',
              padding: {
                top: 0,
                bottom:5
            }
          }
      }
      },
    });

  }// fim do afterViewInit

  navigateToAdicionarAlimento() {
    this.navigateService.navigateToAdicionarAlimento(this.usuario);
    this.service.imprimeConsole(this.usuario);
  }

  navigateToAlterarAlimento(){
    this.navigateService.navigateToAlterarAlimento(this.usuario);
  }

  somaTotalCaloriasConsumidas() {
    this.totalCaloriasConsumidas =
      this.totalCaloriasCafeManha +
      this.totalCaloriasAlmoco +
      this.totalCaloriasCafeTarde +
      this.totalCaloriasJantar;
  }

  calculaTotalCarboidrato() {
    var carb = this.alimentoService.calculaQuantCarboidrato(this.usuario);
    this.totalCarboidrato = (carb * 4 * 100) / this.totalCaloriasConsumidas;
  }

  calculaTotalProteina() {
    var prot = this.alimentoService.calculaQuantProteina(this.usuario);
    this.totalProteina = (prot * 4 * 100) / this.totalCaloriasConsumidas;
  }

  calculaTotalGordura() {
    var gord = this.alimentoService.calculaQuantGordura(this.usuario);
    this.totalGordura = (gord * 9 * 100) / this.totalCaloriasConsumidas;
  }
}
