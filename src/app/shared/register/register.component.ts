import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginActions } from 'src/app/modules/login/redux/actions/login';
import { AppState } from 'src/app/redux/interfaces/app-state';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl()

  });
  constructor(private redux: NgRedux<AppState>, private loginActions: LoginActions) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    let emailToLogin = this.form.get('email').value;
    let passToLogin = this.form.get('password').value;
    this.loginActions.register(emailToLogin, passToLogin);

  }

}
