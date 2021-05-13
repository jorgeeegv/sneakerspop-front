import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SneakerListComponent } from './components/sneaker-list/sneaker-list.component';
import { SneakerAddComponent } from './components/sneaker-add/sneaker-add.component';
import { SneakerEditComponent } from './components/sneaker-edit/sneaker-edit.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path : '',
    component : SneakerListComponent
  },
  {
    path : 'new',
    component : SneakerAddComponent,
    // canActivate: [AuthGuard]
  },
  {
    path : ':sneakerId',
    component : SneakerEditComponent,
    // canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SneakersRoutingModule { }
