import { Component, OnInit } from '@angular/core';
import { ClientesComponent } from '../clientes.component';

@Component({
  selector: 'app-incluir',
  templateUrl: '../clientes.component.html',
  styleUrls: ['../clientes.component.scss']
})
export class IncluirClientesComponent extends ClientesComponent implements OnInit {

  ngOnInit() {
  }

}
