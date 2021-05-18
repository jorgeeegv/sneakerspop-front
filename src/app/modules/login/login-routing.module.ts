import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from 'src/app/shared/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },{
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'sneakers',
    loadChildren: () => import('./../sneakers/sneakers.module').then(s => s.SneakersModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
