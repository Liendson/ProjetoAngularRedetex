import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { IncluirServicosComponent } from './incluir-servicos/incluir-servicos.component';
import { EditarServicosComponent } from './editar-servicos/editar-servicos.component';
import { ListarServicosComponent } from './listar-servicos/listar-servicos.component';

const routes = [
   { path: '', component: ListarServicosComponent, pathMatch: 'full' },
   { path: 'incluir', component: IncluirServicosComponent, pathMatch: 'full' },
   { path: 'alterar/:id', component: EditarServicosComponent, pathMatch: 'full' }
];

@NgModule({
   declarations: [
      IncluirServicosComponent,
      EditarServicosComponent,
      ListarServicosComponent
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
export class ServicosModule {}
