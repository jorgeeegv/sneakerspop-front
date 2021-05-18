import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/redux/interfaces/app-state';
import { LoginActions } from '../../redux/actions/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
  email : new FormControl(),
  password : new FormControl()

  });
  constructor(private redux : NgRedux<AppState>, private loginActions : LoginActions) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    let emailToLogin = this.form.get('email').value;
    let passToLogin = this.form.get('password').value;
    this.loginActions.login(emailToLogin, passToLogin);
    
  }

}
