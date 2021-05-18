import { Injectable } from "@angular/core";
import { NgRedux } from '@angular-redux/store';
import { HttpClient } from "@angular/common/http";
import { AppState } from "src/app/redux/interfaces/app-state";
import { enviroment } from "src/environments/enviroment.master";
import { ShopVO } from "src/app/models/ShopVO";
import { Router } from "@angular/router";

@Injectable()
export class ShopActions {
  static SET_SHOP = 'SET_SHOP';
  static FIND_SHOPS = 'FIND_SHOPS';

  constructor(
    private redux: NgRedux<AppState>,
    private http: HttpClient,
    private router : Router
  ) { }

  listShop(){
    this.http.get(enviroment.apiEndPoint + "/shops").subscribe((response: Array<ShopVO>) => {
      if (response && response!=null) {
        this.redux.dispatch({
          type: ShopActions.FIND_SHOPS,
          payload: {
            list: {
              list: response,
              count: Object.keys(response).length

            }

          }
        })
      } else {
        this.router.navigate(['shops'])
      }
    })
  }
}