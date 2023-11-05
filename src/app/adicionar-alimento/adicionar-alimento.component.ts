import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-alimento',
  templateUrl: './adicionar-alimento.component.html',
  styleUrls: ['./adicionar-alimento.component.css']
})
export class AdicionarAlimentoComponent implements OnInit {


  ngOnInit(): void {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  }



}
