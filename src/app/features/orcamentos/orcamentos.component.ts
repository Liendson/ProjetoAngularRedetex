import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamentos',
  templateUrl: './orcamentos.component.html',
  styleUrls: ['./orcamentos.component.scss']
})
export class OrcamentosComponent implements OnInit {

  protected nivel = 1;

  public incluir = true;

  constructor() { }

  ngOnInit() {
  }

  setarNível(nivel) {
    this.nivel = nivel;
  }

}
