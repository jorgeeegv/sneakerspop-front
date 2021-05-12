import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsListComponent } from './components/brands-list/brands-list.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';


@NgModule({
  declarations: [BrandsListComponent, BrandAddComponent],
  imports: [
    CommonModule,
    BrandsRoutingModule
  ]
})
export class BrandsModule { }
