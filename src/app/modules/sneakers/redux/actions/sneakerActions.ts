import { NgRedux } from "@angular-redux/store";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { SneakerVO } from "src/app/models/SneakerVO";
import { AppState } from "src/app/redux/interfaces/app-state";
import { enviroment } from "src/environments/enviroment.master";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';
@Injectable()
export class sneakersActions {
  static CREATE_SNEAKER = "CREATE_SNEAKER";
  static GET_SNEAKERS = "GET_SNEAKERS";
  static FIND_SNEAKER = "FIND_SNEAKER";
  static CLEAR_SNEAKER = "CLEAR_SNEAKER";



  constructor(
    private redux: NgRedux<AppState>,
    private http: HttpClient,
    private router: Router,
     private toastrService: ToastrService
  ) { }

  createSneaker(sneaker: SneakerVO) {
    let token = this.redux.getState().login.token;
    this.http.post(enviroment.apiEndPoint + "/sneaker", sneaker, { headers: { "authorization" : token }}).subscribe((response : SneakerVO)=>{
      if (response && response != null) {
        console.log(response)
        this.redux.dispatch({
          type: sneakersActions.CREATE_SNEAKER,
          payload: {
            selectedSneaker: response[0]

          }
        })
        this.router.navigate(['sneakers']);
        this.toastrService.success('Nueva Sneaker!', 'Zapatilla añadida correctamente');

      } else {
        this.router.navigate(['home'])
      }
    });
  }
  listSneakers() {
      this.http.get(enviroment.apiEndPoint + "/sneakers").subscribe((response: Array<SneakerVO>) => {
        if (response && response != null) {
          this.redux.dispatch({
            type: sneakersActions.GET_SNEAKERS,
            payload: {
              list: {
                list: response,
                count: Object.keys(response).length

              }

            }
          })
        } else {
          this.router.navigate(['home'])
        }
      })

  }

  findSneaker(id:number) {
      this.http.get(enviroment.apiEndPoint + "/sneaker/" + id).subscribe((response: SneakerVO) => {
        if (response && response != null) {
          this.redux.dispatch({
            type: sneakersActions.FIND_SNEAKER,
            payload: {
              selectedSneaker: response[0]

            }
          })
        } else {
          this.router.navigate(['home'])
        }
      })
    
  }

  uploadImg(imagen : File){
    const formData = new FormData();
    formData.append('image',imagen);
    return this.http.post(enviroment.apiImagebb, formData, { params: { key: enviroment.keyImagebb}}).pipe(map((response)=> response['data']['url']))
  }

  clearSneaker(){
    this.redux.dispatch({
      type: sneakersActions.FIND_SNEAKER,
      payload: {
        selectedSneaker: null

      }
    })
  }

}