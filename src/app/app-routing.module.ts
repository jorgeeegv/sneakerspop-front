import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { InitArticleComponent } from './shared/init-article/init-article.component';
import { RegisterComponent } from './shared/register/register.component';

const routes: Routes = [
  {
    path : '',
    component : InitArticleComponent
  },
  {
    path : 'sneakers',
    loadChildren: () => import('./modules/sneakers/sneakers.module').then(s => s.SneakersModule)
  },
  {
    path: 'brands',
    loadChildren: () => import('./modules/brands/brands.module').then(b => b.BrandsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(b => b.LoginModule)

  },
  {
    path :'dashboard',
    component : DashboardComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
