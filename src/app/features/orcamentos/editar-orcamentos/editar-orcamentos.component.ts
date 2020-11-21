import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomAlertsService } from 'src/app/shared/shared-services/custom-alerts.service';
import { SharedServicesService } from 'src/app/shared/shared-services/shared-services.service';

@Component({
  selector: 'app-editar-orcamentos',
  templateUrl: './editar-orcamentos.component.html',
  styleUrls: ['./editar-orcamentos.component.scss']
})
export class EditarOrcamentosComponent implements OnInit {

  public URL_ORCAMENTOS = `http://localhost:8080/orcamentos/`;
  public formulario: FormGroup;
  public nrOrcamento;

  constructor(
    private mensagem: CustomAlertsService,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private services: SharedServicesService
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      tipoOrcamento:     [null],
      nomeCliente:       [null],
      telefoneCliente:   [null],
      nomeRua:           [null],
      cepRua:            [null],
      numeroEdificio:    [null],
      nomeEdificio:      [null],
      numeroApartamento: [null],
      obsAdicional:      [null],
      situacaoOrcamento: [null]
    });

    this.activatedRoute.params.subscribe((parametros) => {
      const idOrcamento = parametros[`id`];
      const urlRequest = this.URL_ORCAMENTOS + idOrcamento;

      this.httpClient.get(urlRequest).subscribe((orcamento: any) => {
        this.nrOrcamento = idOrcamento;
        this.formulario.patchValue({
          tipoOrcamento:     orcamento[0].tipoOrcamento,
          nomeCliente:       orcamento[0].nomeClienteOrcamento,
          telefoneCliente:   orcamento[0].telefoneClienteOrcamento,
          nomeRua:           orcamento[0].nomeRuaOrcamento,
          cepRua:            orcamento[0].cepRuaOrcamento,
          numeroEdificio:    orcamento[0].numeroEdificioOrcamento,
          nomeEdificio:      orcamento[0].nomeEdificioOrcamento,
          numeroApartamento: orcamento[0].apartamentoEdificioOrcamento,
          obsAdicional:      orcamento[0].pontoReferenciaOrcamento,
          situacaoOrcamento: orcamento[0].situacaoOrcamento
        });
      });
    });
  }

  editarDados(formulario) {

    if (!this.services.validarDados(formulario, 'Orçamento')) {
      return false;
    }

    this.formulario.patchValue({
      tipoOrcamento:      formulario.value.tipoOrcamento,
      nomeCliente:        formulario.value.nomeCliente,
      nomeRua:            formulario.value.nomeRua,
      cepRua:             formulario.value.cepRua,
      telefoneCliente:    formulario.value.telefoneCliente,
      numeroEdificio:     formulario.value.numeroEdificio,
      nomeEdificio:       formulario.value.nomeEdificio,
      numeroApartamento:  formulario.value.numeroApartamento,
      obsAdicional:       formulario.value.obsAdicional,
      situacao_orcamento: formulario.value.situacao_orcamento
    });

    const urlRequest = this.URL_ORCAMENTOS + this.nrOrcamento + '/alterar';

    this.httpClient.put(urlRequest, this.formulario.value).subscribe(
      (success) => { this.mensagem.exibirSucesso('Sucesso!', 'Orçamento alterado com sucesso!'); },
      (error) => { this.mensagem.exibirErro('Erro!', 'Contate os administradores do sistema!'); }
    );

  }

  voltar() {
    this.services.retornarRota('orcamentos');
  }
}
