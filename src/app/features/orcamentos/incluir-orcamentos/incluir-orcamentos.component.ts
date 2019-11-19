import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomAlertsService } from 'src/app/shared/custom-alerts/custom-alerts.service';
import { SharedServicesService } from 'src/app/shared/shared-services/shared-services.service';

@Component({
  selector: 'app-incluir-orcamentos',
  templateUrl: './incluir-orcamentos.component.html',
  styleUrls: ['./incluir-orcamentos.component.scss']
})
export class IncluirOrcamentosComponent implements OnInit {

  public formulario: FormGroup;
  public urlRequest = `http://localhost:8080/orcamentos/inserir`;

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private mensagem: CustomAlertsService,
    private services: SharedServicesService
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      tipoOrcamento:              [null],
      ehCadastrado:               [null],
      nomeClienteOrcamento:       [null],
      nomeRuaOrcamento:           [null],
      cepRuaOrcamento:            [null],
      numeroTelefoneCliente:      [null],
      nomeEdificioOrcamento:      [null],
      numeroEdificioOrcamento:    [null],
      numeroApartamentoOrcamento: [null],
      pontoReferenciaOrcamento:   [null]
    });

  }

  inserirDados(formulario) {

    if(!this.services.validarDados(formulario, "Orçamento")) {
      return false;
    }

    this.formulario = this.formBuilder.group({
      tipoOrcamento:              [formulario.value.tipoOrcamento],
      ehCadastrado:               [formulario.value.ehCadastrado],
      nomeClienteOrcamento:       [formulario.value.nomeClienteOrcamento],
      nomeRuaOrcamento:           [formulario.value.nomeRuaOrcamento],
      cepRuaOrcamento:            [formulario.value.cepRuaOrcamento],
      numeroTelefoneCliente:      [formulario.value.numeroTelefoneCliente],
      nomeEdificioOrcamento:      [formulario.value.nomeEdificioOrcamento],
      numeroEdificioOrcamento:    [formulario.value.numeroEdificioOrcamento],
      numeroApartamentoOrcamento: [formulario.value.numeroApartamentoOrcamento],
      pontoReferenciaOrcamento:   [formulario.value.pontoReferenciaOrcamento]
    });

    this.httpClient.post(this.urlRequest, this.formulario.value).subscribe(
      (success) => { this.mensagem.exibirSucesso('Sucesso!', 'Orçamento incluído com sucesso!') },
      (error) => { this.mensagem.exibirErro('Erro!', 'Contate os administradores do sistema!') }
    )
  }

  voltar() {
    this.services.retornarRota("orcamentos");
  }

}
