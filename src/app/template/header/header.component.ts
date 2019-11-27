import { AuthService } from './../../features/login/auth.service';
import { Component, OnInit } from '@angular/core';

import { CustomAlertsService } from 'src/app/shared/custom-alerts/custom-alerts.service';
import { Usuario } from 'src/app/shared/modelos/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: Usuario;

  constructor(
    private mensagem: CustomAlertsService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  fazerLogout() {
    this.authService.fazerLogout();
  }

  naoImplementada() {
    this.mensagem.exibirAvisoNaoImplementada();
  }

}
