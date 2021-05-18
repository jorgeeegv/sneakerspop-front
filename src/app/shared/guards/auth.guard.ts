import { NgRedux, select } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppStateLogin } from 'src/app/redux/interfaces/app-state-login';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  @select(['login']) login$: Observable<AppStateLogin>;

  dataUser;
  constructor( private redux : NgRedux<AppStateLogin>, private router : Router){
    this.login$.subscribe((response)=>{
      this.dataUser = response;
    })

  }

// Comprobar con redux variable de login true o false 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.dataUser);
    if (this.dataUser.admin === true && this.dataUser.logged === true && this.dataUser.token!=null) {
      return true;
    } else {
      this.router.navigate(['sneakers'])
      return false;
    }
  }
  
}
