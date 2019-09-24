import { Component, OnInit } from '@angular/core';
import { ClientesComponent } from '../clientes.component';

@Component({
  templateUrl: '../clientes.component.html',
  styleUrls: ['../clientes.component.scss']
})
export class IncluirClientesComponent extends ClientesComponent implements OnInit {

  public incluir = true;

  ngOnInit() {
  }

}
