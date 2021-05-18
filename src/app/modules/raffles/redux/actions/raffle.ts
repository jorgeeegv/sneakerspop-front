import { Injectable } from "@angular/core";
import { NgRedux } from '@angular-redux/store';
import { HttpClient } from "@angular/common/http";
import { AppState } from "src/app/redux/interfaces/app-state";
import { enviroment } from "src/environments/enviroment.master";
import { RaffleVO } from "src/app/models/RaffleVO";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class RaffleActions {
  static SET_RAFFLE = 'SET_RAFFLE';
  static FIND_RAFFLES = 'FIND_RAFFLES';
  static CREATE_RAFFLE = 'CREATE_RAFFLE';

  constructor(
    private redux: NgRedux<AppState>,
    private http: HttpClient,
    private router : Router,
    private toaster : ToastrService
  ) { }

  findRaffles(){
    this.http.get(enviroment.apiEndPoint + "/raffles").subscribe((response: Array<RaffleVO>) => {
      if (response) {
        this.redux.dispatch({
          type: RaffleActions.FIND_RAFFLES,
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

  createRaffle(raffle: RaffleVO) {
    console.log(raffle);
    let token = this.redux.getState().login.token;
    this.http.post(enviroment.apiEndPoint + "/raffle", raffle, { headers: { "authorization": token } }).subscribe((response: RaffleVO) => {
      if (response) {
        this.redux.dispatch({
          type: RaffleActions.CREATE_RAFFLE,
          payload: {
            selectedRaffle: response[0]

          }
        })
        this.router.navigate(['sorteos'])
        this.toaster.success('Nueva Sorteo!', 'Raffle añadido correctamente');

      } else {
        this.router.navigate(['home'])
      }
    });
  }


}