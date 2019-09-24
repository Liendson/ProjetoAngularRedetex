import { Component, OnInit } from '@angular/core';
import { OrcamentosComponent } from '../orcamentos.component';

@Component({
  templateUrl: '../orcamentos.component.html',
  styleUrls: ['../orcamentos.component.scss']
})
export class IncluirOrcamentosComponent extends OrcamentosComponent implements OnInit {

  public incluir = true;

  ngOnInit() {
  }

}
