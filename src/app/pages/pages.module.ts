import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../_components/components.module';

import { LoginComponent } from '../pages/login/login.component';
import { MaintenanceCreateComponent } from '../pages/maintenance-create/maintenance-create.component';
import { RegisterUserComponent } from '../pages/register-user/register-user.component';
import { MaintenanceRequestComponent } from './maintenance-request/maintenance-request.component';
import { RequestListComponent } from './maintenance-request/request-list/request-list.component';
import { RequestDetailComponent } from './maintenance-request/request-detail/request-detail.component';
import { RequestListItemComponent } from './maintenance-request/request-list/request-list-item/request-list-item.component';

@NgModule({
  declarations: [
    LoginComponent,
    MaintenanceCreateComponent,
    RegisterUserComponent,
    MaintenanceRequestComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestListItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
