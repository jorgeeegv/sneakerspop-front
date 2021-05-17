import { Injectable } from "@angular/core";
import { NgRedux } from '@angular-redux/store';
import { HttpClient } from "@angular/common/http";
import { AppState } from "src/app/redux/interfaces/app-state";

@Injectable()
export class BrandActions {
  static BRAND_NEW = 'BRAND_NEW';

  constructor(
    private redux: NgRedux<AppState>,
    private http: HttpClient,
  ) { }
}