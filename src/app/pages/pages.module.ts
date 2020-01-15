import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';

import { LoginComponent } from '../pages/login/login.component';
import { MaintenanceListComponent } from '../pages/maintenance-list/maintenance-list.component';
import { MaintenanceCreateComponent } from '../pages/maintenance-create/maintenance-create.component';
import { RegisterUserComponent } from '../pages/register-user/register-user.component';

@NgModule({
  declarations: [
    LoginComponent,
    MaintenanceListComponent,
    MaintenanceCreateComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
