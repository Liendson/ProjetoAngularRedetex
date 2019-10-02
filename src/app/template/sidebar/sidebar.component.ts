import { Component, OnInit } from '@angular/core';

import { CustomAlertsService } from 'src/app/shared/custom-alerts/custom-alerts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private mensagem: CustomAlertsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  naoImplementada() {
    this.mensagem.exibirAvisoNaoImplementada();
  }

  mudarRota(rota: string) {
    this.router.navigate([rota]);
  }

}
