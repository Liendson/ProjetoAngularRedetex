import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

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
      ListarOrcamentosComponent,
   ],
   imports: [
      SharedModule,
      RouterModule.forChild(routes)
   ]
})
export class OrcamentosModule { }
