import { Injectable } from '@angular/core';
import Swal, * as swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CustomAlertsService {

  public exibirAvisoNaoImplementada() {
    return Swal.fire({
      title: 'Erro!',
      text: 'Esta funcionalidade ainda não foi implementada!',
      type: 'error',
      confirmButtonClass: 'btn-danger',
    });
  }

  public exibirSucesso(titulo: string, mensagem: string) {
    return Swal.fire({
      title: titulo,
      text: mensagem,
      type: 'success',
      confirmButtonClass: 'btn-danger',
    });
  }

  public exibirErro(titulo: string, mensagem: string) {
    return Swal.fire({
      title: titulo,
      text: mensagem,
      type: 'error',
      confirmButtonClass: 'btn-danger',
    });
  }

  public exibirAlerta(titulo: string, mensagem: string) {
    return Swal.fire({
      title: titulo,
      text: mensagem,
      type: 'warning',
      confirmButtonClass: 'btn-danger',
    });
  }
}
