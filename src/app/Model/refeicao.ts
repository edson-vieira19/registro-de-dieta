import { Alimento } from './alimento';
export class Refeicao {

  nome: string;
  alimentos: Alimento[];
  totalCaloriasRefeicao!: number;

  constructor(nome: string) {
    this.nome = nome;
    this.alimentos = [];
  }

  adicionarAlimento(alimento: Alimento) {
    this.alimentos.push(alimento);
  }

  calculaCaloriasRefeicao(){
    var totalCalorias =0;
    for(let i=0; i< this.alimentos.length; i++){
        totalCalorias += this.alimentos[i].calorias;
    }
    this.totalCaloriasRefeicao = totalCalorias;
  }

}
