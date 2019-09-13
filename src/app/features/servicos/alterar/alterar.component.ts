import { Component, OnInit } from '@angular/core';
import { ServicosComponent } from '../servicos.component';

@Component({
  selector: 'app-alterar',
  templateUrl: '../servicos.component.html',
  styleUrls: ['../servicos.component.scss']
})
export class AlterarServicosComponent extends ServicosComponent implements OnInit {

  ngOnInit() {
  }

}
