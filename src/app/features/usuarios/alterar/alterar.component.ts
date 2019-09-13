import { Component, OnInit } from '@angular/core';
import { UsuariosComponent } from '../usuarios.component';

@Component({
  selector: 'app-alterar',
  templateUrl: '../usuarios.component.html',
  styleUrls: ['../usuarios.component.scss']
})
export class AlterarUsuariosComponent extends UsuariosComponent implements OnInit {

  ngOnInit() {
  }

}
