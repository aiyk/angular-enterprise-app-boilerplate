import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { MaintenanceListComponent } from './maintenance-list/maintenance-list.component';
import { MaintenanceCreateComponent } from './maintenance-create/maintenance-create.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  { path: '', component: MaintenanceListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'create', component: MaintenanceCreateComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
