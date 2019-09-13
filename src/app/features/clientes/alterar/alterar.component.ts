import { Component, OnInit } from '@angular/core';
import { ClientesComponent } from '../clientes.component';

@Component({
  selector: 'app-alterar',
  templateUrl: '../clientes.component.html',
  styleUrls: ['../clientes.component.scss']
})
export class AlterarClientesComponent extends ClientesComponent implements OnInit {

  ngOnInit() {
  }

}
