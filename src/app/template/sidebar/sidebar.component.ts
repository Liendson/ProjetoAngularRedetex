import { Component, OnInit } from '@angular/core';

import { CustomAlertsService } from 'src/app/shared/custom-alerts/custom-alerts.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/modelos/Usuario';
import { AuthService } from 'src/app/features/login/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUser: Usuario;

  constructor(
    private mensagem: CustomAlertsService,
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  naoImplementada() {
    this.mensagem.exibirAvisoNaoImplementada();
  }

  mudarRota(rota: string) {
    this.router.navigate([rota]);
  }

}
