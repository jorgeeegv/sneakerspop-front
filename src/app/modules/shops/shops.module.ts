import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { ShopsListComponent } from './components/shops-list/shops-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [ShopsListComponent],
  imports: [
    CommonModule,
    ShopsRoutingModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class ShopsModule { }
