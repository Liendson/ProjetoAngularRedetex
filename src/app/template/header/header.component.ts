import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public usuario = 'Liendson';
  public title: string = 'Redetex Ambientações';
  public teee: string = 'Redetex Ambientações';


  constructor() { }

  ngOnInit() {
  }

}
