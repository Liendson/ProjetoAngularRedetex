import { Injectable } from '@angular/core';
import { CustomAlertsService } from './custom-alerts.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor(
    private mensagemAlerta: CustomAlertsService,
    private router: Router
  ) { }

  validarDados(formulario, label: string) {
    if (formulario.status === 'INVALID') {
      this.mensagemAlerta.exibirErro('Erro!', `Preencha todos os dados do ${label}`);
      return false;
    }
    return true;
  }

  retornarRota(rota: string) {
    this.router.navigate([`${rota}/`]);
  }

  static openModal(modalService: NgbModal, component: any, size: string = 'md') {
		const modalRef = modalService.open(component,
			{ backdrop: 'static', size, keyboard: false, windowClass: 'modal-custom-' + size }
		);
		return modalRef;
	}
}
