import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLogoutComponent } from './template/login-logout/login-logout.component';
import { IndexComponent } from './template/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
