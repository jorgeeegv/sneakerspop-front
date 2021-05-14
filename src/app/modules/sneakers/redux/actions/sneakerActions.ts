import { NgRedux } from "@angular-redux/store";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { SneakerVO } from "src/app/models/SneakerVO";
import { AppState } from "src/app/redux/interfaces/app-state";
import { enviroment } from "src/environments/enviroment.master";
// @Injectable()
// export class sneakersActions {
// static
//     constructor(
//       private redux: NgRedux<AppState>,
//       private http: HttpClient,
//       private router: Router,
//       private toastrService: ToastrService
//     ) { }

//     createSneaker(sneaker : SneakerVO){
//       let body = sneaker
//       this.http.post(enviroment.apiEndPoint,body).subscribe((sneaker)=>{
//         this.redux.dispatch({
//           type : 
//         })
//       })
//     }
    
// }