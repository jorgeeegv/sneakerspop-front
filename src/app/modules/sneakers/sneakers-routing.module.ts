import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SneakerListComponent } from './components/sneaker-list/sneaker-list.component';
import { SneakerAddComponent } from './components/sneaker-add/sneaker-add.component';
import { SneakerEditComponent } from './components/sneaker-edit/sneaker-edit.component';


const routes: Routes = [
  {
    path : '',
    component : SneakerListComponent
  },
  {
    path : 'new',
    component : SneakerAddComponent
  },
  {
    path : ':sneakerId',
    component : SneakerEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SneakersRoutingModule { }
