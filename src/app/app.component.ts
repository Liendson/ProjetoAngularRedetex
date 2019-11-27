import { Component } from '@angular/core';
import { Usuario } from './shared/modelos/Usuario';
import { Router } from '@angular/router';
import { AuthService } from './features/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
