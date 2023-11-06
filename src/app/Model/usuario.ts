import { Alimento } from "./alimento";

export class Usuario{
id!:string;    
nome:string;
email:string;
idade:any;
peso:any;
altura:any;
atividade:number;
necessidadeCalorica!:number;
alimentos: Alimento[];

constructor(nome:string, email:string, idade:any,peso:any, altura:any, atividade:number){
    this.id = String(Math.round(Math.random() * 1000));
    this.nome = nome;
    this.email = email;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.atividade = atividade;
    this.alimentos = [];
}

    calculaNecessidadeCalorica(){
    
    var tmb;
    //equação de Harris-Benetict
    tmb = (13.7516*this.peso)+(5.0033*this.altura)-(6.755*this.idade)+66.47;
    this.necessidadeCalorica = Math.round(tmb*this.atividade);
    }

}