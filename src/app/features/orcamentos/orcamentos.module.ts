import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { IncluirOrcamentosComponent } from './incluir-orcamentos/incluir-orcamentos.component';
import { EditarOrcamentosComponent } from './editar-orcamentos/editar-orcamentos.component';
import { ModalDetalharOrcamentoComponent } from './detalhar-orcamentos/detalhar-orcamentos.component';
import { ConsultarOrcamentosComponent } from './consultar-orcamentos/consultar-orcamentos.component';

const routes = [
   { path: 'incluir', component: IncluirOrcamentosComponent, pathMatch: 'full' },
   { path: 'alterar/:id', component: EditarOrcamentosComponent, pathMatch: 'full' },
   { path: 'consultar', component: ConsultarOrcamentosComponent, pathMatch: 'full' }
];

@NgModule({
   declarations: [
      IncluirOrcamentosComponent,
      EditarOrcamentosComponent,
      ModalDetalharOrcamentoComponent,
      ConsultarOrcamentosComponent,
   ],
   imports: [
      SharedModule,
      RouterModule.forChild(routes)
   ]
})
export class OrcamentosModule { }
