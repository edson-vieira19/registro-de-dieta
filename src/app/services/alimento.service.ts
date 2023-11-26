import { Alimento } from './../Model/alimento';
import { Injectable } from '@angular/core';
import { Usuario } from '../Model/usuario';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlimentoService {
  constructor(private http: HttpClient) {}

  private url: string = 'http://localhost:3000/alimentos';

  //salva um alimento usando promisses
  async salvarAlimentoNoDbJson(alimento: Alimento): Promise<any> {
    var obs = this.http.post(this.url, alimento);

    return await lastValueFrom(obs);
  }

  //retorna um alimento pelo nome
  getAlimento(nome: string): Observable<any> {
    nome = nome.toLowerCase();

    console.log(`${this.url}/?nome=${encodeURIComponent(nome)}`);

    return this.http.get(`${this.url}/?nome=${encodeURIComponent(nome)}`);
  }

  //retorna sugestoes para autocompletar
  getAlimentosSugestao(termo: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}?nome_like=^${termo}`);
  }

  somaTotalCaloriasCafeManha(usuario: Usuario): number {
    var totalCaloriasCafeManha = 0;
    for (let i = 0; i < usuario.cafeDaManha.alimentos.length; i++) {
      totalCaloriasCafeManha += Number.parseInt(
        usuario.cafeDaManha.alimentos[i].calorias
      );
    }
    return totalCaloriasCafeManha;
  }

  somaTotalCaloriasAlmoco(usuario: Usuario): number {
    var totalCaloriasAlmoco = 0;
    for (let i = 0; i < usuario.almoco.alimentos.length; i++) {
      totalCaloriasAlmoco += Number.parseInt(
        usuario.almoco.alimentos[i].calorias
      );
    }
    return totalCaloriasAlmoco;
  }

  somaTotalCaloriasCafeTarde(usuario: Usuario): number {
    var totalCaloriasCafeTarde = 0;
    for (let i = 0; i < usuario.cafeDaTarde.alimentos.length; i++) {
      totalCaloriasCafeTarde += Number.parseInt(
        usuario.cafeDaTarde.alimentos[i].calorias
      );
    }
    return totalCaloriasCafeTarde;
  }
  somaTotalCaloriasJantar(usuario: Usuario): number {
    var totalCaloriasJantar = 0;
    for (let i = 0; i < usuario.jantar.alimentos.length; i++) {
      totalCaloriasJantar += Number.parseInt(
        usuario.jantar.alimentos[i].calorias
      );
    }
    return totalCaloriasJantar;
  }

  calculaQuantCarboidrato(usuario: Usuario): number {
    var carb = 0;
    for (let i = 0; i < usuario.cafeDaManha.alimentos.length; i++) {
      carb += Number.parseInt(usuario.cafeDaManha.alimentos[i].carboidrato);
    }
    for (let i = 0; i < usuario.almoco.alimentos.length; i++) {
      carb += Number.parseInt(usuario.almoco.alimentos[i].carboidrato);
    }
    for (let i = 0; i < usuario.cafeDaTarde.alimentos.length; i++) {
      carb += Number.parseInt(usuario.cafeDaTarde.alimentos[i].carboidrato);
    }
    for (let i = 0; i < usuario.jantar.alimentos.length; i++) {
      carb += Number.parseInt(usuario.jantar.alimentos[i].carboidrato);
    }

    return carb;
  }

  calculaQuantProteina(usuario: Usuario): number {
    var prot = 0;

    for (let i = 0; i < usuario.cafeDaManha.alimentos.length; i++) {
      prot += Number.parseInt(usuario.cafeDaManha.alimentos[i].proteina);
    }
    for (let i = 0; i < usuario.almoco.alimentos.length; i++) {
      prot += Number.parseInt(usuario.almoco.alimentos[i].proteina);
    }
    for (let i = 0; i < usuario.cafeDaTarde.alimentos.length; i++) {
      prot += Number.parseInt(usuario.cafeDaTarde.alimentos[i].proteina);
    }
    for (let i = 0; i < usuario.jantar.alimentos.length; i++) {
      prot += Number.parseInt(usuario.jantar.alimentos[i].proteina);
    }

    return prot;
  }

  calculaQuantGordura(usuario: Usuario): number {
    var gord = 0;

    for (let i = 0; i < usuario.cafeDaManha.alimentos.length; i++) {
      gord += Number.parseInt(usuario.cafeDaManha.alimentos[i].gordura);
    }
    for (let i = 0; i < usuario.almoco.alimentos.length; i++) {
      gord += Number.parseInt(usuario.almoco.alimentos[i].gordura);
    }
    for (let i = 0; i < usuario.cafeDaTarde.alimentos.length; i++) {
      gord += Number.parseInt(usuario.cafeDaTarde.alimentos[i].gordura);
    }
    for (let i = 0; i < usuario.jantar.alimentos.length; i++) {
      gord += Number.parseInt(usuario.jantar.alimentos[i].gordura);
    }
    return gord;
  }
}
