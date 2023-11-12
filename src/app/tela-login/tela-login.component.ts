import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit{

  imageUrl: string = "assets/resources/images/salmon-with-fresh-salad.jpg";


  constructor(){

  }

  ngOnInit(): void {
      
  }

}
