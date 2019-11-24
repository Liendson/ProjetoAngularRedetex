import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Usuario } from 'src/app/shared/modelos/Usuario';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario: FormGroup;
 
  constructor( 
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.usuario = this.formBuilder.group({
      nome: [null],
      senha: [null]
    })
  }

  realizarLogin(formulario) {

    this.usuario = this.formBuilder.group({
      nome: formulario.value.nome,
      senha: formulario.value.senha
    })

    this.authService.fazerLogin(this.usuario);
  }

}
