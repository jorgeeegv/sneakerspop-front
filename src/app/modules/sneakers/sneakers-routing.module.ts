import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SneakerListComponent } from './components/sneaker-list/sneaker-list.component';
import { SneakerAddComponent } from './components/sneaker-add/sneaker-add.component';
import { SneakerEditComponent } from './components/sneaker-edit/sneaker-edit.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { SneakerComponent } from './components/sneaker/sneaker.component';

const routes: Routes = [
  {
    path : '',
    component : SneakerListComponent
  },
  {
    path : 'new',
    component : SneakerAddComponent,
     canActivate: [AuthGuard]
  },
  {
    path : 'edit/:sneakerId',
    component : SneakerEditComponent,
     canActivate: [AuthGuard]
  },
  {
    path : ':sneakerId',
    component : SneakerComponent
  },
    {
    path: 'home',
    loadChildren: () => import('./../../shared/init-article/init-article.component').then(b => b.InitArticleComponent)

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SneakersRoutingModule { }
