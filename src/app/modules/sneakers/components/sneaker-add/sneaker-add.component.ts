import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,
  Validators,
  FormControl } from '@angular/forms';

@Component({
  selector: 'app-sneaker-add',
  templateUrl: './sneaker-add.component.html',
  styleUrls: ['./sneaker-add.component.scss']
})
export class SneakerAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(form)

  }

}
