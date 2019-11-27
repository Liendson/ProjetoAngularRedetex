import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { first } from 'rxjs/operators';
import { Usuario } from 'src/app/shared/modelos/Usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomAlertsService } from 'src/app/shared/custom-alerts/custom-alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public returnUrl: string;
  public carregando = false;
  public submit = false;
  public erro = '';

  constructor(
    private mensagem: CustomAlertsService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }

    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });

    // tslint:disable-next-line:no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get form() {
    return this.loginForm.controls;
  }

  realizarLogin() {

    this.submit = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.carregando = true;

    this.authService.fazerLogin(this.loginForm.value.usuario, this.loginForm.value.senha)
      .pipe(first())
      .subscribe(
        data => {
          this.carregando = false;
        },
        error => {
          this.carregando = false;
        });
  }

}
