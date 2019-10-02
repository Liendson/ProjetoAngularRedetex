import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { IncluirClientesComponent } from './incluir-clientes/incluir-clientes.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';

const routes = [
   { path: '', component: ListarClientesComponent, pathMatch: 'full' },
   { path: 'incluir', component: IncluirClientesComponent, pathMatch: 'full' },
   { path: 'alterar/:id', component: EditarClientesComponent, pathMatch: 'full'}
];

@NgModule({
   declarations: [
      IncluirClientesComponent,
      ListarClientesComponent,
      EditarClientesComponent
   ],
   imports: [
      CommonModule,
      RouterModule.forChild(routes),
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      DataTablesModule
   ]
})
export class ClientesModule {}
