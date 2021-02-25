import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { IncluirClientesComponent } from './incluir-clientes/incluir-clientes.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';
import { ConsultarClientesComponent } from './consultar-clientes/consultar-clientes.component';

const routes = [
   { path: '', component: ListarClientesComponent, pathMatch: 'full' },
   { path: 'incluir', component: IncluirClientesComponent, pathMatch: 'full' },
   { path: 'alterar/:id', component: EditarClientesComponent, pathMatch: 'full'}
];

@NgModule({
   declarations: [
      IncluirClientesComponent,
      ListarClientesComponent,
      EditarClientesComponent,
      ConsultarClientesComponent
   ],
   imports: [
      SharedModule,
      RouterModule.forChild(routes),
   ]
})
export class ClientesModule {}
