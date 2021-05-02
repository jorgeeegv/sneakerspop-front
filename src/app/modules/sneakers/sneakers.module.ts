import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SneakersRoutingModule } from './sneakers-routing.module';
import { SneakerListComponent } from './components/sneaker-list/sneaker-list.component';
import { SneakerItemComponent } from './components/sneaker-item/sneaker-item.component';


@NgModule({
  declarations: [
    SneakerListComponent,
    SneakerItemComponent
  ],
  imports: [
    CommonModule,
    SneakersRoutingModule
  ],
  // exports: [SneakerListComponent]

})
export class SneakersModule { }
