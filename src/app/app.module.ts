import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaintenanceListComponent } from './maintenance-list/maintenance-list.component';
import { MaintenanceCreateComponent } from './maintenance-create/maintenance-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MaintenanceListComponent,
    MaintenanceCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
