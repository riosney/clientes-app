import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) {

  }

  salvar( cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8081/api/clientes', cliente);
  }

  getCliente() : Cliente {
    let cliente : Cliente = new Cliente();
    cliente.nome = 'Fulado de tal';
    cliente.cpf = '11122233344'
    return cliente;
  }
}
