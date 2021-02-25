import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  public urlController = '/servicos'

  constructor(private baseService: BaseService) { }

  salvar(servico) {
    return this.baseService.post(`${this.urlController}/salvar`, servico)
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

  concluir(id: string) {
    return this.baseService.get(`${this.urlController}/concluir/${id}`)
  }
}
