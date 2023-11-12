export class Alimento{
    nome:string;
    carboidrato:number;
    proteina:number;
    gordura:number;
    calorias:number;

    constructor(nome:string,carboidrato:number, proteina:number, gordura:number){
        this.nome = nome;
        this.carboidrato = carboidrato;
        this.proteina = proteina;
        this.gordura = gordura;
        this.calorias = carboidrato*4 + proteina*4 +gordura*9;
    } 
}