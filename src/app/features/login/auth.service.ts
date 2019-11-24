import { Injectable, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/modelos/Usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private usuarioSistema: Usuario = new Usuario;
  private usuarioAutenticado: boolean = false;
  private urlRequest = 'http://localhost:8080/autenticar';

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    ) { }

  fazerLogin(usuario) {

    this.httpClient.post(this.urlRequest, usuario.value).subscribe(
      (usuarioSistemaNome: string) => { 
        this.usuarioAutenticado = true;
        this.usuarioSistema.nome = usuarioSistemaNome;
        console.log('teste')
      },
      (error) => { 
        console.error(error) 
      }
    )
  }
}
