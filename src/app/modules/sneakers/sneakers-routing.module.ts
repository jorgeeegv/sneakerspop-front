import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SneakerListComponent } from './components/sneaker-list/sneaker-list.component';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  {
    path : 'sneakers',
    component : SneakerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SneakersRoutingModule { }
