import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  protected nivel = 1;

  public incluir = true;

  constructor() { }

  ngOnInit() {
  }

  setarNível(nivel) {
    this.nivel = nivel;
  }

}
