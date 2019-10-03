import { Component, OnInit } from '@angular/core';

import { CustomAlertsService } from 'src/app/shared/custom-alerts/custom-alerts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

<<<<<<< HEAD
  public usuario = 'Liendson';
  public title: string = 'Redetex Ambientações';
  public teee: string = 'Redetex Ambientações';


  constructor() { }
=======
  constructor(
    private mensagem: CustomAlertsService
  ) {}
>>>>>>> ffc33979f71862a74398a84e08cbb126e2ae6a6f

  ngOnInit() {
  }

  naoImplementada() {
    this.mensagem.exibirAvisoNaoImplementada();
  }

}
