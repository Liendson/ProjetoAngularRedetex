import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomAlertsService } from 'src/app/shared/custom-alerts/custom-alerts.service';
import { SharedServicesService } from 'src/app/shared/shared-services/shared-services.service';

@Component({
  selector: 'app-incluir-servicos',
  templateUrl: './incluir-servicos.component.html',
  styleUrls: ['./incluir-servicos.component.scss']
})
export class IncluirServicosComponent implements OnInit {

  public formulario: FormGroup;
  public urlRequest = `http://localhost:8080/servicos/inserir`;

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private mensagem: CustomAlertsService,
    private services: SharedServicesService
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      tipoServico:              [null],
      nomeClienteServico:       [null],
      telefoneClienteServico:   [null],
      nomeRuaServico:           [null],
      cepRuaServico:            [null],
      numeroEdificioServico:    [null],
      nomeEdificioServico:      [null],
      numeroApartamentoServico: [null],
      pontoReferenciaServico:   [null]
    });

  }

  inserirDados(formulario) {

    if (!this.services.validarDados(formulario, 'Serviço')) {
      return false;
    }

    this.formulario = this.formBuilder.group({

      tipoServico:              [formulario.value.tipoServico],
      nomeClienteServico:       [formulario.value.nomeClienteServico],
      telefoneClienteServico:   [formulario.value.telefoneClienteServico],
      nomeRuaServico:           [formulario.value.nomeRuaServico],
      cepRuaServico:            [formulario.value.cepRuaServico],
      numeroEdificioServico:    [formulario.value.numeroEdificioServico],
      nomeEdificioServico:      [formulario.value.nomeEdificioServico],
      numeroApartamentoServico: [formulario.value.numeroApartamentoServico],
      pontoReferenciaServico:   [formulario.value.pontoReferenciaServico]
    });

    this.httpClient.post(this.urlRequest, this.formulario.value).subscribe(
      (success) => { this.mensagem.exibirSucesso('Sucesso!', 'Serviço incluído com sucesso!'); },
      (error) => { this.mensagem.exibirErro('Erro!', 'Contate os administradores do sistema!'); }
    );
  }

  voltar() {
    this.services.retornarRota('servicos');
  }

}
