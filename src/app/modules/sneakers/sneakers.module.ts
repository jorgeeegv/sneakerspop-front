import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SneakerItemComponent } from './components/sneaker-item/sneaker-item.component';
import { SneakerListComponent } from './components/sneaker-list/sneaker-list.component';



@NgModule({
  declarations: [SneakerItemComponent, SneakerListComponent],
  imports: [
    CommonModule
  ]
})
export class SneakersModule { }
