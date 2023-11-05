export class Usuario{
nome:string;
email:string;
idade:number;
peso:number;
altura:number;
nivelDeAtividae:number;
necessidadeCalorica:number;

constructor(nome:string, email:string, idade:number,peso:number, altura:number, nivelDeAtividade:number){
    this.nome=nome;
    this.email=email;
    this.idade=idade;
    this.peso=peso;
    this.altura = altura;
    this.nivelDeAtividae=nivelDeAtividade;
    this.necessidadeCalorica = this.calculaNecessidadeCalorica();
}

    calculaNecessidadeCalorica():number {
    
    var tmb;
    //equação de Harris-Benetict
    tmb = (13.7516*this.peso)+(5.0033*this.altura)-(6.755*this.idade)+66.47
    return tmb*this.nivelDeAtividae;
    }

}