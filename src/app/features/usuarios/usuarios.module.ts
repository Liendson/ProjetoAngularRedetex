import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { IncluirUsuariosComponent } from './incluir-usuarios/incluir-usuarios.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';

const routes = [
   { path: '', component: ListarUsuariosComponent, pathMatch: 'full' },
   { path: 'incluir', component: IncluirUsuariosComponent, pathMatch: 'full' },
   { path: 'alterar/:id', component: EditarUsuariosComponent, pathMatch: 'full' }
];

@NgModule({
   declarations: [
      IncluirUsuariosComponent,
      ListarUsuariosComponent,
      EditarUsuariosComponent
   ],
   imports: [
      SharedModule,
      RouterModule.forChild(routes),
   ]
})
export class UsuariosModule {}
