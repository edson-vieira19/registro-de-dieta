import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterar-alimento',
  templateUrl: './alterar-alimento.component.html',
  styleUrls: ['./alterar-alimento.component.css']
})
export class AlterarAlimentoComponent implements OnInit {




  ngOnInit(): void {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  }


}
