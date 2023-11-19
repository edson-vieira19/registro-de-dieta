import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../Model/usuario';

@Injectable({
  providedIn: 'any'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/usuarios';


  constructor(private http: HttpClient) { }

  // buscarUsuarioPorNomeAndEmail(nome: string, email:string): Observable<any> {
  //   const url = `${this.apiUrl}?nome_like=${nome}&email_like=${email}`;
  //   return this.http.get(url);
  // }

  buscarTodosUsuarios(): Observable<Usuario[]>{
    
    return this.http.get<Usuario[]>(this.apiUrl);

  }





}

