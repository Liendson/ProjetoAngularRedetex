import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

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
      SharedModule,
      RouterModule.forChild(routes),
   ]
})
export class ServicosModule {}
