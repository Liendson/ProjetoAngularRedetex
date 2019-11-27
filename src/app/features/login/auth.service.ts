import { Injectable, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/modelos/Usuario';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { CustomAlertsService } from 'src/app/shared/custom-alerts/custom-alerts.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;
  private urlRequest = 'http://localhost:8080/autenticar';


  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private mensagem: CustomAlertsService
    ) {
      this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
    }

  public get currentUserValue(): Usuario {
    return this.currentUserSubject.value;
  }

  fazerLogin(username: string, password: string) {

    return this.httpClient.post<any>(this.urlRequest, { username, password }).pipe(map(usuario => {
      if (JSON.stringify(usuario) !== '[]') {
        localStorage.setItem('currentUser', JSON.stringify(usuario));
        this.currentUserSubject.next(usuario);
        this.router.navigate(['/']);
      } else {
        this.mensagem.exibirErro('Erro!', 'Usuário ou senha incorretos!');
      }
    }));
  }

  fazerLogout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
