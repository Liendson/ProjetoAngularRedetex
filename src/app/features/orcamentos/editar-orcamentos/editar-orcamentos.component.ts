import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-orcamentos',
  templateUrl: './editar-orcamentos.component.html',
  styleUrls: ['./editar-orcamentos.component.scss']
})
export class EditarOrcamentosComponent implements OnInit {

  public formulario: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      endereco: [null],
      numero: [null],
      nomeEdificio: [null],
      numeroApartamento: [null],
      obsAdicional: [null]
    });

    this.activatedRoute.params.subscribe((parametros) => {
      const orcamentoId = parametros[`id`];
      const urlRequest = `https://jsonplaceholder.typicode.com/posts/${orcamentoId}`;

      this.httpClient.get(urlRequest).subscribe((orcamento: any) => {
        console.log(orcamento);
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
