import { Injectable } from '@angular/core';
import { Usuario } from '../Model/usuario';

@Injectable({
  providedIn: 'root',
})
export class AlimentoService {
  constructor() {}

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
