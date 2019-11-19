import { Injectable } from '@angular/core';
import { CustomAlertsService } from '../custom-alerts/custom-alerts.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor(
    private mensagemAlerta: CustomAlertsService,
    private router: Router
  ) { }
    
  validarDados(formulario, usuario: string) {
    if (formulario.status == "INVALID") {
      this.mensagemAlerta.exibirErro('Erro!', `Preencha todos os dados do ${usuario}`)
      return false;
    }
    return true;
  }

  retornarRota(rota: string) {
    this.router.navigate([`${rota}/`])
  }
}
