import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Mascaras } from 'src/app/shared/mascaras/Mascaras';
import { ClientesService } from 'src/app/shared/shared-services/clientes.service';
import { CustomAlertsService } from 'src/app/shared/shared-services/custom-alerts.service';
import { OrcamentosService } from 'src/app/shared/shared-services/orcamentos.service';
import { SharedServicesService } from 'src/app/shared/shared-services/shared-services.service';

@Component({
  selector: 'app-consultar-orcamentos',
  templateUrl: './consultar-orcamentos.component.html',
  styleUrls: ['./consultar-orcamentos.component.scss']
})
export class ConsultarOrcamentosComponent implements OnInit {

  public formulario: FormGroup;

  get numeroOrcamento() { return this.formulario.get('numeroOrcamento') }
  get tipoOrcamento() { return this.formulario.get('tipoOrcamento') }
  get nomeClienteOrcamento() { return this.formulario.get('nomeClienteOrcamento') }
  get nomeRuaOrcamento() { return this.formulario.get('nomeRuaOrcamento') }
  get cepRuaOrcamento() { return this.formulario.get('cepRuaOrcamento') }
  get numeroTelefoneCliente() { return this.formulario.get('numeroTelefoneCliente') }
  get nomeEdificioOrcamento() { return this.formulario.get('nomeEdificioOrcamento') }
  get bairroOrcamento() { return this.formulario.get('bairroOrcamento') }
  get pontoReferenciaOrcamento() { return this.formulario.get('pontoReferenciaOrcamento') }
  get periodoInicialOrcamento() { return this.formulario.get('periodoInicialOrcamento') }
  get periodoFinalOrcamento() { return this.formulario.get('periodoFinalOrcamento') }

  get maskTelefone() { return Mascaras.TELEFONE }
  get maskCEP() { return Mascaras.CEP }

  constructor(
    private orcamentoService: OrcamentosService,
    private clientesService: ClientesService,
    private formBuilder: FormBuilder,
    private customAlerts: CustomAlertsService,
    private services: SharedServicesService
  ) { }

  ngOnInit() {
    this.configurarFormulario()
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      numeroOrcamento: [null],
      tipoOrcamento: [null],
      nomeClienteOrcamento: [null],
      nomeRuaOrcamento: [null],
      cepRuaOrcamento: [null],
      numeroTelefoneCliente: [null],
      nomeEdificioOrcamento: [null],
      bairroOrcamento: [null],
      pontoReferenciaOrcamento: [null],
      periodoInicialOrcamento: [null],
      periodoFinalOrcamento: [null]
    });
  }

  consultarCliente(nrTelefone) {
    if (nrTelefone) {
      this.clientesService.buscarPorTelefone(Mascaras.removerMascara(nrTelefone)).subscribe((cliente: any) => {
        this.nomeClienteOrcamento.setValue(cliente.nomeCliente)
      })
    } else {
      // TODO: adicionar toltip 'informe um telefone'
    }
  }

  consultarCEP(nrCep) {
    console.log(nrCep)
  }

  consultar() {

    if (this.periodoInicialOrcamento.value && !this.periodoFinalOrcamento.value) {
      return this.customAlerts.exibirAlerta('Alerta!', 'Preencha o intervalo de datas corretamente!')
    }

    const object = {
      numeroOrcamento: this.numeroOrcamento.value,
      tipoOrcamento: this.tipoOrcamento.value,
      nomeClienteOrcamento: this.nomeClienteOrcamento.value,
      nomeRuaOrcamento: this.nomeRuaOrcamento.value,
      cepRuaOrcamento: this.cepRuaOrcamento.value,
      numeroTelefoneCliente: this.numeroTelefoneCliente.value,
      nomeEdificioOrcamento: this.nomeEdificioOrcamento.value,
      bairroOrcamento: this.bairroOrcamento.value,
      pontoReferenciaOrcamento: this.pontoReferenciaOrcamento.value,
      periodoInicialOrcamento: this.periodoInicialOrcamento.value,
      periodoFinalOrcamento: this.periodoFinalOrcamento.value
    }

    this.orcamentoService.consultar(object).subscribe((orcamento: any) => {
      //TODO fazer o resultado da consulta
    })
  }

  limparCampos() {
    this.numeroOrcamento.setValue('')
    this.tipoOrcamento.setValue('')
    this.nomeClienteOrcamento.setValue('')
    this.nomeRuaOrcamento.setValue('')
    this.cepRuaOrcamento.setValue('')
    this.numeroTelefoneCliente.setValue('')
    this.nomeEdificioOrcamento.setValue('')
    this.bairroOrcamento.setValue('')
    this.pontoReferenciaOrcamento.setValue('')
    this.periodoInicialOrcamento.setValue('')
    this.periodoFinalOrcamento.setValue('')
  }

}
