import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomAlertsService } from 'src/app/shared/custom-alerts/custom-alerts.service';
import { SharedServicesService } from 'src/app/shared/shared-services/shared-services.service';

@Component({
  selector: 'app-editar-servicos',
  templateUrl: './editar-servicos.component.html',
  styleUrls: ['./editar-servicos.component.scss']
})
export class EditarServicosComponent implements OnInit {

  public URL_SERVICOS = `http://localhost:8080/servicos/`;
  public formulario: FormGroup;
  public nrServico;

  constructor(
    private mensagem: CustomAlertsService,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private services: SharedServicesService
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      tipoServico:       [null],
      nomeCliente:       [null],
      telefoneCliente:   [null],
      nomeRua:           [null],
      cepRua:            [null],
      numeroEdificio:    [null],
      nomeEdificio:      [null],
      numeroApartamento: [null],
      obsAdicional:      [null],
      situacaoServico:   [null]
    });

    this.activatedRoute.params.subscribe((params) => {
      const idServico = params[`id`];
      const urlRequest = this.URL_SERVICOS + idServico;

      this.httpClient.get(urlRequest).subscribe((servico: any) => {
        this.nrServico = idServico;
        this.formulario.patchValue({
          tipoServico:       servico[0].tipoServico,
          nomeCliente:       servico[0].nomeClienteServico,
          nomeRua:           servico[0].nomeRuaServico,
          cepRua:            servico[0].cepRuaServico,
          telefoneCliente:   servico[0].telefoneClienteServico,
          numeroEdificio:    servico[0].numeroEdificioServico,
          nomeEdificio:      servico[0].nomeEdificioServico,
          numeroApartamento: servico[0].apartamentoEdificioServico,
          obsAdicional:      servico[0].pontoReferenciaServico,
          situacaoServico:   servico[0].situacaoServico
        });
      });
    });
  }

  editarDados(formulario) {

    if (!this.services.validarDados(formulario, 'Serviços')) {
      return false;
    }

    this.formulario.patchValue({
      tipoOrcamento:     formulario.value.tipoOrcamento,
      nomeCliente:       formulario.value.nomeCliente,
      nomeRua:           formulario.value.nomeRua,
      cepRua:            formulario.value.cepRua,
      telefoneCliente:   formulario.value.telefoneCliente,
      numeroEdificio:    formulario.value.numeroEdificio,
      nomeEdificio:      formulario.value.nomeEdificio,
      numeroApartamento: formulario.value.numeroApartamento,
      obsAdicional:      formulario.value.obsAdicional,
      situacaoServico:   formulario.value.situacaoServico
    });

    const urlRequest = this.URL_SERVICOS + this.nrServico + '/alterar';

    this.httpClient.put(urlRequest, this.formulario.value).subscribe(
      (success) => { this.mensagem.exibirSucesso('Sucesso!', 'Serviço alterado com sucesso!'); },
      (error) => { this.mensagem.exibirErro('Erro!', 'Contate os administradores do sistema!'); }
    );
  }

  voltar() {
    this.services.retornarRota('servicos');
  }
}
