import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Chart from 'chart.js/auto';
import { Usuario } from '../Model/usuario';
import { UsuarioService } from '../services/usuario.service';
import { Alimento } from '../Model/alimento';

declare var M: any;

@Component({
  selector: 'app-diario-alimentar',
  templateUrl: './diario-alimentar.component.html',
  styleUrls: ['./diario-alimentar.component.css']
})
export class DiarioAlimentarComponent implements OnInit, AfterViewInit{
  @ViewChild('donutchart') donutChart!: ElementRef;

  //armazena o usuario que sera recuperado do webstorage
  usuario!:Usuario;

  //valor calorico total do usuario
  caloricNeeds:any;

  //calorias dos alimentos adicionados
  totalCaloriasConsumidas:number;
  totalCaloriasAlmoco:number;
  totalCaloriasCafeManha:number;
  totalCaloriasCafeTarde:number;
  totalCaloriasJantar:number;

  //valores para o grafico, % em relacao ao total consumido
  totalCarboidrato:number;
  totalProteina:number;
  totalGordura:number;

  constructor(private service:UsuarioService, private route: ActivatedRoute){

    //inicializacao das propriedades
    this.totalCaloriasConsumidas = 0;
    this.totalCaloriasAlmoco = 0;
    this.totalCaloriasCafeManha =0;
    this.totalCaloriasCafeTarde = 0;
    this.totalCaloriasJantar = 0;

    this.totalCarboidrato = 0;
    this.totalProteina = 0;
    this.totalGordura =0;

  }
  
  ngOnInit(): void {
    
    //inicializacao do collapsible
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems,{
      accordion: false
    });    
 
    //id do usuario de acordo com a rota
    this.route.params.subscribe(params => {

      const userId = +params['id'];
      this.usuario = this.service.buscarNoLocalStorage(userId.toString());
      this.caloricNeeds = this.usuario.necessidadeCalorica;
      

      //chamada dos metodos para calular
      // as propriedades a ser exibida no template
      this.somaTotalCaloriasAlmoco();
      this.somaTotalCaloriasCafeManha();
      this.somaTotalCaloriasCafeTarde();
      this.somaTotalCaloriasJantar();
      this.somaTotalCaloriasConsumidas();

      this.calculaTotalCarboidrato();
      this.calculaTotalProteina();
      this.calculaTotalGordura();

    });

  }

    //metodo do clique do botao "adicionar"
  navigateToAdicionarAlimento(){

    this.service.navigateToAdicionarAlimento(this.usuario);
    this.service.imprimeConsole(this.usuario);

  }

  ngAfterViewInit(): void {

    //inicializacao do grafico

    const ctx = this.donutChart.nativeElement.getContext('2d');
    
    var chart = new Chart(ctx,{
      type: 'doughnut',
      data: {
        labels: ['carboidrato', 'proteina', 'gordura'],
        datasets: [{
          data: [this.totalCarboidrato, this.totalProteina, this.totalGordura],
          backgroundColor: ['#E3DC38', '#E44848', '#3899DF']
        }]
      },
      options: {
        //cutout: '80%', // Define a porcentagem de corte para criar o donut
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  somaTotalCaloriasCafeManha(){

    for(let i = 0; i< this.usuario.cafeDaManha.alimentos.length; i++){
      this.totalCaloriasCafeManha += Number.parseInt(this.usuario.cafeDaManha.alimentos[i].calorias);
    }
  }

  somaTotalCaloriasAlmoco(){

    for(let i = 0; i< this.usuario.almoco.alimentos.length; i++){
      this.totalCaloriasAlmoco += Number.parseInt(this.usuario.almoco.alimentos[i].calorias);
    }
  }

  somaTotalCaloriasCafeTarde(){
    for(let i = 0; i< this.usuario.cafeDaTarde.alimentos.length; i++){
      this.totalCaloriasCafeTarde += Number.parseInt(this.usuario.cafeDaTarde.alimentos[i].calorias);
    }

  }
  somaTotalCaloriasJantar(){

    for(let i = 0; i< this.usuario.jantar.alimentos.length; i++){
      this.totalCaloriasJantar += Number.parseInt(this.usuario.jantar.alimentos[i].calorias);
    }
  }

  somaTotalCaloriasConsumidas(){

    this.totalCaloriasConsumidas = this.totalCaloriasCafeManha + this.totalCaloriasAlmoco + this.totalCaloriasCafeTarde + this.totalCaloriasJantar
  }

  calculaTotalCarboidrato(){

    var carb = 0
  
    for(let i=0; i < this.usuario.cafeDaManha.alimentos.length; i++){
          carb += Number.parseInt(this.usuario.cafeDaManha.alimentos[i].carboidrato);
    }   
    for(let i=0; i < this.usuario.almoco.alimentos.length; i++){
      carb += Number.parseInt(this.usuario.almoco.alimentos[i].carboidrato);
    } 
    for(let i=0; i < this.usuario.cafeDaTarde.alimentos.length; i++){
      carb += Number.parseInt(this.usuario.cafeDaTarde.alimentos[i].carboidrato);
    } 
    for(let i=0; i < this.usuario.jantar.alimentos.length; i++){
      carb += Number.parseInt(this.usuario.jantar.alimentos[i].carboidrato);
  }

    this.totalCarboidrato = (carb*4*100)/this.totalCaloriasConsumidas;

  }

calculaTotalProteina(){

  var prot = 0
  
    for(let i=0; i < this.usuario.cafeDaManha.alimentos.length; i++){
          prot += Number.parseInt(this.usuario.cafeDaManha.alimentos[i].proteina);
    }   
    for(let i=0; i < this.usuario.almoco.alimentos.length; i++){
      prot += Number.parseInt(this.usuario.almoco.alimentos[i].proteina);
    } 
    for(let i=0; i < this.usuario.cafeDaTarde.alimentos.length; i++){
      prot += Number.parseInt(this.usuario.cafeDaTarde.alimentos[i].proteina);
    } 
    for(let i=0; i < this.usuario.jantar.alimentos.length; i++){
      prot += Number.parseInt(this.usuario.jantar.alimentos[i].proteina);
  }

    this.totalProteina = (prot*4*100)/this.totalCaloriasConsumidas;

}

calculaTotalGordura(){

  var gord = 0
  
  for(let i=0; i < this.usuario.cafeDaManha.alimentos.length; i++){
        gord += Number.parseInt(this.usuario.cafeDaManha.alimentos[i].gordura);
  }   
  for(let i=0; i < this.usuario.almoco.alimentos.length; i++){
    gord += Number.parseInt(this.usuario.almoco.alimentos[i].gordura);
  } 
  for(let i=0; i < this.usuario.cafeDaTarde.alimentos.length; i++){
    gord += Number.parseInt(this.usuario.cafeDaTarde.alimentos[i].gordura);
  } 
  for(let i=0; i < this.usuario.jantar.alimentos.length; i++){
    gord += Number.parseInt(this.usuario.jantar.alimentos[i].gordura);
}

  this.totalGordura = (gord*4*100)/this.totalCaloriasConsumidas;

}

}


