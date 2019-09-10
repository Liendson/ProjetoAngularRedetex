// Imports do Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports de Dependencias

// Imports de Módulos/Componentes/Services
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { LoginLogoutComponent } from './template/login-logout/login-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
