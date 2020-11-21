import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomAlertsService } from 'src/app/shared/shared-services/custom-alerts.service';
import { SharedServicesService } from 'src/app/shared/shared-services/shared-services.service';
import { OrcamentosService } from 'src/app/shared/shared-services/orcamentos.service';
import { ClientesService } from 'src/app/shared/shared-services/clientes.service';
import { Mascaras } from 'src/app/shared/mascaras/Mascaras';

@Component({
  selector: 'app-incluir-orcamentos',
  templateUrl: './incluir-orcamentos.component.html',
  styleUrls: ['./incluir-orcamentos.component.scss']
})
export class IncluirOrcamentosComponent implements OnInit {

  public formulario: FormGroup;

  get tipoOrcamento() { return this.formulario.get('tipoOrcamento') }
  get nomeClienteOrcamento() { return this.formulario.get('nomeClienteOrcamento') }
  get nomeRuaOrcamento() { return this.formulario.get('nomeRuaOrcamento') }
  get cepRuaOrcamento() { return this.formulario.get('cepRuaOrcamento') }
  get numeroTelefoneCliente() { return this.formulario.get('numeroTelefoneCliente') }
  get nomeEdificioOrcamento() { return this.formulario.get('nomeEdificioOrcamento') }
  get bairroOrcamento() { return this.formulario.get('bairroOrcamento') }
  get numeroEdificioOrcamento() { return this.formulario.get('numeroEdificioOrcamento') }
  get numeroApartamentoOrcamento() { return this.formulario.get('numeroApartamentoOrcamento') }
  get pontoReferenciaOrcamento() { return this.formulario.get('pontoReferenciaOrcamento') }

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
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      tipoOrcamento: [null],
      nomeClienteOrcamento: [null],
      nomeRuaOrcamento: [null],
      cepRuaOrcamento: [null],
      numeroTelefoneCliente: [null],
      nomeEdificioOrcamento: [null],
      bairroOrcamento: [null],
      numeroEdificioOrcamento: [null],
      numeroApartamentoOrcamento: [null],
      pontoReferenciaOrcamento: [null]
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

  inserirDados(formulario) {
    if (!this.services.validarDados(formulario, 'Orçamento')) {
      return false;
    }

    const orcamento = {
      tipoOrcamento: formulario.value.tipoOrcamento,
      clienteOrcamento: {
        nomeCliente: formulario.value.nomeClienteOrcamento,
        telefoneCliente: formulario.value.numeroTelefoneCliente
      },
      enderecoOrcamento: {
        nomeRua: formulario.value.nomeRuaOrcamento,
        cepRua: formulario.value.cepRuaOrcamento,
        nomeEdificio: formulario.value.nomeEdificioOrcamento,
        numeroEdificio: formulario.value.numeroEdificioOrcamento,
        apartamentoEdificio: formulario.value.numeroApartamentoOrcamento,
        bairro: formulario.value.bairroOrcamento
      },
      observacaoOrcamento: formulario.value.pontoReferenciaOrcamento,
      valorOrcamento: 0
    }

    this.orcamentoService.salvar(orcamento).subscribe(
      () => { this.customAlerts.exibirSucesso('Sucesso!', 'Orçamento incluído com sucesso!'); },
      () => { this.customAlerts.exibirErro('Erro!', 'Contate os administradores do sistema!'); }
    );
  }

}
