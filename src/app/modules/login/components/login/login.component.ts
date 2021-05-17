import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.form.value); 
  }

}
