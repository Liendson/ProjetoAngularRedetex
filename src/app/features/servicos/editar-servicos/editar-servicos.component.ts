import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-servicos',
  templateUrl: './editar-servicos.component.html',
  styleUrls: ['./editar-servicos.component.scss']
})
export class EditarServicosComponent implements OnInit {

  public formulario: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      endereco: [],
      numero: [],
      nomeEdificio: [],
      numeroApartamento: [],
      obsAdicional: []
    });

    this.activatedRoute.params.subscribe((params) => {
      const orcamentoId = params[`id`];
      const urlRequest = `https://jsonplaceholder.typicode.com/posts/${orcamentoId}`;

      this.httpClient.get(urlRequest).subscribe((orcamento: any) => {
        this.formulario.patchValue({
          endereco: orcamento.userId,
          numero: orcamento.id,
          nomeEdificio: orcamento.title,
          numeroApartamento: orcamento.id,
          obsAdicional: orcamento.body
        });
      });
    });
  }

}
