import { Refeicao } from "./refeicao";

export class Usuario{

static proximoId: number = 1;    

id:number;    
nome:string;
email:string;
idade:any;
peso:any;
altura:any;
atividade:number;
genero:string;
necessidadeCalorica!:number;

cafeDaManha: Refeicao = new Refeicao('Café da Manhã');
almoco: Refeicao = new Refeicao('Almoço');
cafeDaTarde: Refeicao = new Refeicao('Café da Tarde');
jantar: Refeicao = new Refeicao('Jantar');

constructor(nome:string, email:string, idade:any,peso:any, altura:any, atividade:number,genero:string){
    this.id = Usuario.proximoId++;
    // this.id = String(Math.round(Math.random() * 1000));
    this.nome = nome;
    this.email = email;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.atividade = atividade;
    this.genero = genero;
}

    calculaNecessidadeCalorica(){
        var tmb;   
        if(this.genero === 'masculino'){
            
            //equação de Harris-Benedict para homens
             tmb = (13.7516*this.peso)+(5.0033*this.altura)-(6.755*this.idade)+66.47;
            this.necessidadeCalorica = Math.round(tmb*this.atividade);
            }
            //equação de Harris-Benedict para mulheres
        else if (this.genero === 'feminino'){
            tmb = 655.1 + (9.563 * this.peso) + (1.85 * this.altura) - (4.676 * this.idade);
            this.necessidadeCalorica = Math.round(tmb*this.atividade);
            }    
         else{
            this.necessidadeCalorica = 0;
         }   
        }

}