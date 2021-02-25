import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { IncluirServicosComponent } from './incluir-servicos/incluir-servicos.component';
import { EditarServicosComponent } from './editar-servicos/editar-servicos.component';
import { ConsultarServicosComponent } from './consultar-servicos/consultar-servicos.component';
import { ModalDetalharServicosComponent } from './detalhar-servicos/detalhar-servicos.component';

const routes = [
   { path: 'incluir', component: IncluirServicosComponent, pathMatch: 'full' },
   { path: 'alterar/:id', component: EditarServicosComponent, pathMatch: 'full' },
   { path: 'consultar', component: ConsultarServicosComponent, pathMatch: 'full' }

];

@NgModule({
   declarations: [
      IncluirServicosComponent,
      EditarServicosComponent,
      ConsultarServicosComponent,
      ModalDetalharServicosComponent
   ],
   imports: [
      SharedModule,
      RouterModule.forChild(routes),
   ]
})
export class ServicosModule {}
