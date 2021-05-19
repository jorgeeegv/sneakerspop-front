import { Injectable } from "@angular/core";
import { NgRedux } from '@angular-redux/store';
import { HttpClient } from "@angular/common/http";
import { AppState } from "src/app/redux/interfaces/app-state";
import { enviroment } from "src/environments/enviroment.master";
import { BrandVO } from "src/app/models/BrandVO";
import { Router } from "@angular/router";

@Injectable()
export class BrandActions {
  static BRAND_NEW = 'BRAND_NEW';
  static LIST_BRANDS = 'LIST_BRANDS';


  constructor(
    private redux: NgRedux<AppState>,
    private http: HttpClient,
    private router: Router
  ) { }

    
  listBrands() {
    this.http.get(enviroment.apiEndPoint + "/brands").subscribe((response: Array<BrandVO>) => {
      if (response && response != null) {
        this.redux.dispatch({
          type: BrandActions.LIST_BRANDS,
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
}