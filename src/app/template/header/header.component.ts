import { Component, OnInit } from '@angular/core';

import { CustomAlertsService } from 'src/app/shared/custom-alerts/custom-alerts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private mensagem: CustomAlertsService
  ) {}

  ngOnInit() {
  }

  naoImplementada() {
    this.mensagem.exibirAvisoNaoImplementada();
  }

}
