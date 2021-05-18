import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginActions } from 'src/app/modules/login/redux/actions/login';
import { AppState } from 'src/app/redux/interfaces/app-state';
import { AppStateLogin } from 'src/app/redux/interfaces/app-state-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @select(['login']) loginState$ : Observable<AppStateLogin>;

  signed: boolean = false;
  adminAccess : boolean = false;
  nameUser : string ;


  constructor(private redux: NgRedux<AppState>, private loginActions: LoginActions) {
    this.loginState$.subscribe((response)=>{
      console.log(response)
      if (response.logged===true) {
        this.signed = true;
        this.nameUser = response.email.toUpperCase();
        this.adminAccess = response.admin;
      }else{
        this.signed = false;
        this.nameUser = null;
      }
    })

   }

  ngOnInit(): void {
  }

  logout(){
    this.loginActions.logout();
  }

}
