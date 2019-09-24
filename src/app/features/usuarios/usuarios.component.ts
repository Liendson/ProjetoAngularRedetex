import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  protected nivel = 1;

  public incluir = true;

  constructor() { }

  ngOnInit() {
  }

  setarNível(nivel) {
    this.nivel = nivel;
  }

}
