import { Component, OnInit } from '@angular/core';
import { OrcamentosComponent } from '../orcamentos.component';

@Component({
  selector: 'app-alterar',
  templateUrl: '../orcamentos.component.html',
  styleUrls: ['../orcamentos.component.scss']
})
export class AlterarOrcamentosComponent extends OrcamentosComponent implements OnInit {

  ngOnInit() {
  }

}
