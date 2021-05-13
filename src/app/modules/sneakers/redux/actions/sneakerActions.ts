import { NgRedux } from "@angular-redux/store";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AppState } from "src/app/redux/interfaces/app-state";

@Injectable()
export class sneakersActions {

    constructor(
      private redux: NgRedux<AppState>,
      private http: HttpClient,
      private router: Router,
      private toastrService: ToastrService
    ) { }
    
}