import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  public urlController = '/clientes'

  constructor(private baseService: BaseService) { }

  salvar(cliente) {
    return this.baseService.post(`${this.urlController}/salvar`, cliente)
  }

  listar() {
    return this.baseService.get(`${this.urlController}/buscar`)
  }

  buscar(id: string) {
    return this.baseService.get(`${this.urlController}/buscar/${id}`)
  }

  cancelar(id: string) {
    return this.baseService.get(`${this.urlController}/cancelar/${id}`)
  }

  ativar(id: string) {
    return this.baseService.get(`${this.urlController}/ativar/${id}`)
  }

  buscarPorTelefone(nrTelefone) {
    return this.baseService.get(`${this.urlController}/buscar-por-telefone/${nrTelefone}`)
  }
}
