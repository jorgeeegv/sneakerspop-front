import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SneakersRoutingModule } from './sneakers-routing.module';
import { SneakerListComponent } from './components/sneaker-list/sneaker-list.component';
import { SneakerItemComponent } from './components/sneaker-item/sneaker-item.component';
import { SneakerAddComponent } from './components/sneaker-add/sneaker-add.component';


@NgModule({
  declarations: [
    SneakerListComponent,
    SneakerItemComponent,
    SneakerAddComponent
  ],
  imports: [
    CommonModule,
    SneakersRoutingModule
  ],
  // exports: [SneakerListComponent]

})
export class SneakersModule { }
