import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { RaffleAddComponent } from './components/raffle-add/raffle-add.component';
import { RafflesListComponent } from './components/raffles-list/raffles-list.component';

const routes: Routes = [
  {
    path : '',
    component : RafflesListComponent
  },
  {
    path : 'new',
    component : RaffleAddComponent,
     canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)  ],
  exports: [RouterModule]
})
export class RafflesRoutingModule { }
