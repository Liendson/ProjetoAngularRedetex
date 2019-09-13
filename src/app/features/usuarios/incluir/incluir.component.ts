import { Component, OnInit } from '@angular/core';
import { UsuariosComponent } from '../usuarios.component';

@Component({
  selector: 'app-incluir',
  templateUrl: '../usuarios.component.html',
  styleUrls: ['../usuarios.component.scss']
})
export class IncluirUsuariosComponent extends UsuariosComponent implements OnInit {

  ngOnInit() {
  }

}
