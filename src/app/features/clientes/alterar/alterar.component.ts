import { Component, OnInit } from '@angular/core';
import { ClientesComponent } from '../clientes.component';

@Component({
  templateUrl: '../clientes.component.html',
  styleUrls: ['../clientes.component.scss']
})
export class AlterarClientesComponent extends ClientesComponent implements OnInit {

  public incluir = false;

  ngOnInit() {
  }

}
