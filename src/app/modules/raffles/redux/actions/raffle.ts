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
  static UPDATE_RAFFLE = 'UPDATE_RAFFLE';


  constructor(
    private redux: NgRedux<AppState>,
    private http: HttpClient,
    private router : Router,
    private toaster : ToastrService
  ) { }

  findRaffles(){
    this.http.get(enviroment.apiEndPoint + "/raffles").subscribe((response: Array<RaffleVO>) => {
      if (response && response!=null) {
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


  updateRaffle(raffle: RaffleVO) {
    console.log(raffle);
    let token = this.redux.getState().login.token;
    if (token !== null) {
      this.http.post(enviroment.apiEndPoint + "/raffle/"+raffle.id, raffle, { headers: { "authorization": token } }).subscribe((response: RaffleVO) => {
      if (response) {
        this.redux.dispatch({
          type: RaffleActions.UPDATE_RAFFLE,
          payload: {
            selectedRaffle: response[0]

          }
        })
        this.router.navigate(['sorteos'])
        this.toaster.success('Tes has apuntado al sorteo correctamente !!', 'Te informaremos mas adelante');

      } else {
        this.router.navigate(['home'])
      }
    });
    } else {
      this.toaster.info('Informacion', 'Debes iniciar sesion antes para poder apuntarte al sorteo!');
      
    }
  }

}