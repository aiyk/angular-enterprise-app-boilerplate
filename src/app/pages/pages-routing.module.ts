import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards/auth.guard';

import { LoginComponent } from '../pages/login/login.component';
import { MaintenanceListComponent } from '../pages/maintenance-list/maintenance-list.component';
import { MaintenanceCreateComponent } from '../pages/maintenance-create/maintenance-create.component';
import { RegisterUserComponent } from '../pages/register-user/register-user.component';

const routes: Routes = [
  { path: '', component: MaintenanceListComponent, canActivate: [AuthGuard] },

  { path: 'list', component: MaintenanceListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'create', component: MaintenanceCreateComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
