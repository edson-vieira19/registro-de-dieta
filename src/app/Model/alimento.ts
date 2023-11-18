export class Alimento{
    nome:string;
    quantidade:any;
    carboidrato:any;
    proteina:any;
    gordura:any;
    calorias:any;

    constructor(nome:string,quantidade:any,carboidrato:any, proteina:any, gordura:any){
        this.nome = nome;
        this.quantidade = quantidade;
        this.carboidrato = carboidrato;
        this.proteina = proteina;
        this.gordura = gordura;
        
    } 

    calculaCalorias(){
        this.calorias = this.carboidrato*4 + this.proteina*4 + this.gordura*9;
    }


}