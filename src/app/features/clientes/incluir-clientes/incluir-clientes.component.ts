import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomAlertsService } from 'src/app/shared/custom-alerts/custom-alerts.service';
import { SharedServicesService } from 'src/app/shared/shared-services/shared-services.service';

@Component({
  selector: 'app-incluir-clientes',
  templateUrl: './incluir-clientes.component.html',
  styleUrls: ['./incluir-clientes.component.scss']
})
export class IncluirClientesComponent implements OnInit {

  public formulario: FormGroup;
  public urlRequest = `http://localhost:8080/clientes/inserir`;

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private mensagem: CustomAlertsService,
    private services: SharedServicesService
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nomeCliente:       [null],
      telefoneCliente:   [null],
      nomeRua:           [null],
      nomeEdificio:      [null],
      numeroEdificio:    [null],
      numeroApartamento: [null],
      pontoReferencia:   [null]
    });

  }

  inserirDados(formulario) {

    if(!this.services.validarDados(formulario, "Cliente")) {
      return false;
    }

    this.formulario = this.formBuilder.group({
      nomeCliente:       [formulario.value.nomeCliente],
      telefoneCliente:   [formulario.value.telefoneCliente],
      nomeRua:           [formulario.value.nomeRua],
      nomeEdificio:      [formulario.value.nomeEdificio],
      numeroEdificio:    [formulario.value.numeroEdificio],
      numeroApartamento: [formulario.value.numeroApartamento],
      pontoReferencia:   [formulario.value.pontoReferencia],
    });

    this.httpClient.post(this.urlRequest, this.formulario.value).subscribe(
      (success) => { this.mensagem.exibirSucesso('Sucesso!', 'Cliente incluído com sucesso!') },
      (error) => { this.mensagem.exibirErro('Erro!', 'Contate os administradores do sistema!') }
    )
  }

  voltar() {
    this.services.retornarRota("clientes")
  }

}
