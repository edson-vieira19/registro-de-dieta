import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Chart from 'chart.js/auto';
import { Usuario } from '../Model/usuario';

declare var M: any;

@Component({
  selector: 'app-diario-alimentar',
  templateUrl: './diario-alimentar.component.html',
  styleUrls: ['./diario-alimentar.component.css']
})
export class DiarioAlimentarComponent implements OnInit, AfterViewInit{
  @ViewChild('donutchart') donutChart!: ElementRef;

  //armazena o usuario que sera recuperado do webstorage
  usuario:any;

  caloricNeeds:any;

  constructor(private route: ActivatedRoute){}
  
  ngOnInit(): void {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems,{
      accordion: false
    });    
 
    this.route.params.subscribe(params => {

      //recupera id do usuario
      const userId = +params['id'];
      
      // Agora você tem o objeto de usuário de volta.
      const usuarioStringJson = localStorage.getItem(userId.toString());
      if(usuarioStringJson)
      this.usuario = JSON.parse(usuarioStringJson);

      this.caloricNeeds = this.usuario.necessidadeCalorica;
   
    });
  }


  ngAfterViewInit(): void {
    const ctx = this.donutChart.nativeElement.getContext('2d');
    
    var chart = new Chart(ctx,{
      type: 'doughnut',
      data: {
        labels: ['carboidrato', 'proteina', 'gordura'],
        datasets: [{
          data: [30, 40, 30],
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

}


