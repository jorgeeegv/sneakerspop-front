import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { ShopsListComponent } from './components/shops-list/shops-list.component';


@NgModule({
  declarations: [ShopsListComponent],
  imports: [
    CommonModule,
    ShopsRoutingModule
  ]
})
export class ShopsModule { }
