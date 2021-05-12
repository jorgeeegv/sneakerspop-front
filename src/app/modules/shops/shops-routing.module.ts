import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopsListComponent } from './components/shops-list/shops-list.component';

const routes: Routes = [
  {
    path : '',
    component : ShopsListComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
