import { Component, OnInit } from '@angular/core';
import { UsuariosComponent } from '../usuarios.component';

@Component({
  templateUrl: '../usuarios.component.html',
  styleUrls: ['../usuarios.component.scss']
})
export class IncluirUsuariosComponent extends UsuariosComponent implements OnInit {

  ngOnInit() {
  }

}
