import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaintenanceListComponent } from './maintenance-list/maintenance-list.component';
import { MaintenanceCreateComponent } from './maintenance-create/maintenance-create.component';
import { AlertComponent } from './_components/alert/alert.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MaintenanceListComponent,
    MaintenanceCreateComponent,
    AlertComponent,
    RegisterUserComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
