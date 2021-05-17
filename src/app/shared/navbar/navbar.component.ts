import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  signed: boolean = false;
  adminAccess : boolean = true;

  nameUser : string ;
  constructor() { }

  ngOnInit(): void {
  }

}
