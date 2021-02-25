import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class OrcamentosService {

  public urlController = '/orcamentos'

  constructor(private baseService: BaseService) { }

  salvar(orcamento) {
    return this.baseService.post(`${this.urlController}/salvar`, orcamento)
  }

  listar() {
    return this.baseService.get(`${this.urlController}/buscar`)
  }

  detalhar(id: string) {
    return this.baseService.get(`${this.urlController}/buscar/${id}`)
  }

  cancelar(id: string) {
    return this.baseService.get(`${this.urlController}/cancelar/${id}`)
  }

  consultar(body) {
    return this.baseService.post(`${this.urlController}/consultar`, body)
  }

  concluir(id: string) {
    return this.baseService.get(`${this.urlController}/concluir/${id}`)
  }

}
