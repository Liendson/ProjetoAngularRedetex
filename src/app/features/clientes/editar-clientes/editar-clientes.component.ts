import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomAlertsService } from 'src/app/shared/services/custom-alerts.service';
import { SharedServicesService } from 'src/app/shared/services/shared-services.service';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.scss']
})
export class EditarClientesComponent implements OnInit {

  public URL_CLIENTES = `http://localhost:8080/clientes/`;
  public formulario: FormGroup;
  public nrCliente;

  constructor(
    private mensagem: CustomAlertsService,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private services: SharedServicesService
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nomeCliente:       [null],
      nomeRua:           [null],
      telefoneCliente:   [null],
      nomeEdificio:      [null],
      numeroApartamento: [null],
      numeroEdificio:    [null],
      obsAdicional:      [null]
    });

    this.activatedRoute.params.subscribe((parametros) => {
      const idCliente = parametros[`id`];
      const urlRequest = this.URL_CLIENTES + idCliente;

      this.httpClient.get(urlRequest).subscribe((cliente: any) => {
        this.nrCliente = idCliente;
        this.formulario.patchValue({
          nomeCliente:       cliente[0].nomeCliente,
          nomeRua:           cliente[0].nomeRuaCliente,
          telefoneCliente:   cliente[0].telefoneCliente,
          numeroEdificio:    cliente[0].numEdificioCliente,
          nomeEdificio:      cliente[0].nomeEdificioCliente,
          numeroApartamento: cliente[0].aptoEdificioCliente,
          obsAdicional:      cliente[0].pontoReferenciaCliente
        });
      });
    });
  }

  editarDados(formulario) {

    if (!this.services.validarDados(formulario, 'Cliente')) {
      return false;
    }

    this.formulario.patchValue({
      nomeCliente:       formulario.value.nomeCliente,
      nomeRua:           formulario.value.nomeRua,
      telefoneCliente:   formulario.value.telefoneCliente,
      numeroEdificio:    formulario.value.numeroEdificioCliente,
      nomeEdificio:      formulario.value.nomeEdificioCliente,
      numeroApartamento: formulario.value.numeroApartamentoCliente,
      obsAdicional:      formulario.value.obsAdicional
    });

    const urlRequest = this.URL_CLIENTES + this.nrCliente + '/alterar';

    this.httpClient.put(urlRequest, this.formulario.value).subscribe(
      (success) => { this.mensagem.exibirSucesso('Sucesso!', 'Cliente alterado com sucesso!'); },
      (error) => { this.mensagem.exibirErro('Erro!', 'Contate os administradores do sistema!'); }
    );

  }

  voltar() {
    this.services.retornarRota('clientes');
  }

}
