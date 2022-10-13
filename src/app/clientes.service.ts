import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) {}

  salvar( cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8081/api/clientes', cliente);
  }

  /*
  getCliente() : Observable<Cliente[]> {
    return null;
  } */

  getClientes() : Cliente[]{
    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'Fulano';
    cliente.dataCadastro = '13/10/2022';
    cliente.cpf = '12345678900'
    return [cliente]
  }

}