import { Component, OnInit } from '@angular/core';

import * as M from 'materialize-css';
//declare var M: any;

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  ngOnInit(): void {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  }
}
