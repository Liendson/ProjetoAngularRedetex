// Imports do Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports de Módulos/Componentes/Services
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { LoginLogoutComponent } from './template/login-logout/login-logout.component';

import { OrcamentosComponent } from './features/orcamentos/orcamentos.component';
import { AlterarOrcamentosComponent } from './features/orcamentos/alterar/alterar.component';
import { IncluirOrcamentosComponent } from './features/orcamentos/incluir/incluir.component';

import { ClientesComponent } from './features/clientes/clientes.component';
import { AlterarClientesComponent } from './features/clientes/alterar/alterar.component';
import { IncluirClientesComponent } from './features/clientes/incluir/incluir.component';

import { ServicosComponent } from './features/servicos/servicos.component';
import { AlterarServicosComponent } from './features/servicos/alterar/alterar.component';
import { IncluirServicosComponent } from './features/servicos/incluir/incluir.component';

import { UsuariosComponent } from './features/usuarios/usuarios.component';
import { AlterarUsuariosComponent } from './features/usuarios/alterar/alterar.component';
import { IncluirUsuariosComponent } from './features/usuarios/incluir/incluir.component';

import { IndexComponent } from './template/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginLogoutComponent,
    IndexComponent,
    OrcamentosComponent,
    ServicosComponent,
    ClientesComponent,
    UsuariosComponent,
    AlterarClientesComponent,
    IncluirClientesComponent,
    AlterarOrcamentosComponent,
    IncluirOrcamentosComponent,
    AlterarServicosComponent,
    IncluirServicosComponent,
    AlterarUsuariosComponent,
    IncluirUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
