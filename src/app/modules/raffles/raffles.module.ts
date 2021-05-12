import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RafflesRoutingModule } from './raffles-routing.module';
import { RafflesListComponent } from './components/raffles-list/raffles-list.component';


@NgModule({
  declarations: [RafflesListComponent],
  imports: [
    CommonModule,
    RafflesRoutingModule
  ]
})
export class RafflesModule { }
