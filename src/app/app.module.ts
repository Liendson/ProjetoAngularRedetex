// Imports do Angular
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Imports de Módulos/Componentes/Services
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { IndexComponent } from './template/index/index.component';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  { path: 'orcamentos', loadChildren: () => import('./features/orcamentos/orcamentos.module').then(module => module.OrcamentosModule) },
  { path: 'servicos', loadChildren: () => import('./features/servicos/servicos.module').then(module => module.ServicosModule) },
  { path: 'usuarios', loadChildren: () => import('./features/usuarios/usuarios.module').then(module => module.UsuariosModule) },
  { path: 'clientes', loadChildren: () => import('./features/clientes/clientes.module').then(module => module.ClientesModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    SidebarComponent,
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    HttpClientModule,
    DataTablesModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
