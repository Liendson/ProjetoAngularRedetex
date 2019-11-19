import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  
  public URL_CLIENTES   = `http://localhost:8080/clientes`;
  public URL_SERVICOS   = `http://localhost:8080/servicos`;
  public URL_ORCAMENTOS = `http://localhost:8080/orcamentos`;
  
  constructor(
    private httpClient: HttpClient
  ) { }

  public listarClientes() {

  }

  public incluirCliente(dadosCliente) {

  }

  public editarCliente(dadosCliente) {

  }

  public removerCliente(idCliente) {
    
  }

  public listarOrcamentos() {

  }

  public incluirOrcamento(dadosOrcamento) {

  }

  public editarOrcamento(dadosOrcamento) {

  }

  public removerOrcamento(idOrcamento) {

  }
  
  public listarServicos() {

  }

  public incluirServico(dadosServico) {

  }

  public editarServico(dadosServico) {

  }

  public removerServico(idServico) {

  }

}
