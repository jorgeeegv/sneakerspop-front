import { Injectable } from "@angular/core";
import { NgRedux } from '@angular-redux/store';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppState } from "src/app/redux/interfaces/app-state";
import { enviroment } from "src/environments/enviroment.master";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable()
export class LoginActions {
  static SET_USER = 'SET_USER';
  static CLEAR_USER = 'CLEAR_USER';
  static CREATE_USER = 'CREATE_USER';



  constructor(
    private redux: NgRedux<AppState>,
    private http: HttpClient,
    private router: Router
  ) { }


    login(email:string,password:string){
      let headers = new HttpHeaders();
      let user = {
        email : email,
        password : password
      }
       this.http.post(enviroment.apiEndPoint+"/login",user).subscribe((user)=>{
        let rol = false;
        if (user['rol']===1) {
          rol = true;
        }

        this.redux.dispatch({
          type : LoginActions.SET_USER,
          payload: {
            logged : true,
            token : user['token'],
            email : user['user'],
            admin : rol
          }
        })
         this.router.navigate(['sneakers']);

       }
       );
    }

    logout(){
      this.redux.dispatch({
        type: LoginActions.CLEAR_USER,
        payload: {
          logged: false,
          token: null,
          email: null,
          admin: null
        }
      })
      this.router.navigate(['']);
    }

  register(email: string, password: string) {
    let headers = new HttpHeaders();
    let user = {
      email: email,
      password: password,
      rol : 0
    }
    this.http.post(enviroment.apiEndPoint + "/register", user).subscribe( async (response) => {
      if (response) {
      await  this.login(user.email,user.password);
      }
    }
    );
  }


}