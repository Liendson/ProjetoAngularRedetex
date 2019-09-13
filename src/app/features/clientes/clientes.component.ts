import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  protected nivel = 1;

  constructor() { }

  ngOnInit() {
  }

  setarNível(nivel) {
    this.nivel = nivel;
  }

}
