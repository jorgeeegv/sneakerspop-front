import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginActions } from './redux/actions/login';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers : [
    LoginActions
  ]
})
export class LoginModule { }
