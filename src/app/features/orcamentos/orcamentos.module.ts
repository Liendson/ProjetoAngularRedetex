import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { IncluirOrcamentosComponent } from './incluir-orcamentos/incluir-orcamentos.component';
import { EditarOrcamentosComponent } from './editar-orcamentos/editar-orcamentos.component';
import { ListarOrcamentosComponent } from './listar-orcamentos/listar-orcamentos.component';

const routes = [
   { path: '', component: ListarOrcamentosComponent, pathMatch: 'full' },
   { path: 'incluir', component: IncluirOrcamentosComponent, pathMatch: 'full' },
   { path: 'alterar/:id', component: EditarOrcamentosComponent, pathMatch: 'full' }
];

@NgModule({
   declarations: [
      IncluirOrcamentosComponent,
      EditarOrcamentosComponent,
      ListarOrcamentosComponent
   ],
   imports: [
      CommonModule,
      RouterModule.forChild(routes),
      CommonModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      DataTablesModule
   ]
})
export class OrcamentosModule { }
