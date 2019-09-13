import { Component, OnInit } from '@angular/core';
import { ServicosComponent } from '../servicos.component';

@Component({
  selector: 'app-incluir',
  templateUrl: '../servicos.component.html',
  styleUrls: ['../servicos.component.scss']
})
export class IncluirServicosComponent extends ServicosComponent implements OnInit {

  ngOnInit() {
  }

}
