import { Injectable } from "@angular/core";
import { NgRedux } from '@angular-redux/store';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppState } from "src/app/redux/interfaces/app-state";
import { enviroment } from "src/environments/enviroment.master";

@Injectable()
export class LoginActions {
  static SET_USER = 'SET_USER';

  constructor(
    private redux: NgRedux<AppState>,
    private http: HttpClient,
  ) { }


    login(email:string,password:string){
      let headers = new HttpHeaders();
      let user = {
        email : email,
        password : password
      }
      // this.http.post(enviroment.apiEndPoint+"")


    }


}