import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RafflesRoutingModule } from './raffles-routing.module';
import { RafflesListComponent } from './components/raffles-list/raffles-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RaffleAddComponent } from './components/raffle-add/raffle-add.component';
import { RaffleActions } from './redux/actions/raffle';
import { ShopActions } from '../shops/redux/actions/shop';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [RafflesListComponent, RaffleAddComponent],
  imports: [
    CommonModule,
    RafflesRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot()

  ],
    providers: [
    RaffleActions,
    ShopActions
  ]
})
export class RafflesModule { }
