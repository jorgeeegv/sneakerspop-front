import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SneakersServiceService } from './services/sneakers-service.service';
import { PopupComponent } from './shared/popup/popup.component';
import { InitArticleComponent } from './shared/init-article/init-article.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppState } from './redux/interfaces/app-state';
import { rootReducer } from './redux/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopupComponent,
    InitArticleComponent,
    DashboardComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
   NgReduxModule,
   BrowserAnimationsModule,
   MDBBootstrapModule.forRoot()
  ],
  providers: [
    SneakersServiceService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { 

  constructor(private ngRedux: NgRedux<AppState>){
    const currState = window.sessionStorage.getItem('reduxState') ? JSON.parse(window.sessionStorage.getItem('reduxState')) : {};
    ngRedux.configureStore(rootReducer,currState);
    window.sessionStorage.setItem('reduxState', JSON.stringify(ngRedux.getState()));

    ngRedux.subscribe(()=>{
      window.sessionStorage.setItem('reduxState', JSON.stringify(ngRedux.getState()))
    })
  }

}
