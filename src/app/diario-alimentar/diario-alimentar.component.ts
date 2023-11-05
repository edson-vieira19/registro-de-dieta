import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

import Chart from 'chart.js/auto';

declare var M: any;

@Component({
  selector: 'app-diario-alimentar',
  templateUrl: './diario-alimentar.component.html',
  styleUrls: ['./diario-alimentar.component.css']
})
export class DiarioAlimentarComponent implements OnInit, AfterViewInit{
  @ViewChild('donutchart') donutChart!: ElementRef;

  constructor(){}
  
  ngOnInit(): void {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems,{
      accordion: false
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


