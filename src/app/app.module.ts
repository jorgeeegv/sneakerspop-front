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
import { RegisterComponent } from './shared/register/register.component';
import { LoginActions } from './modules/login/redux/actions/login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { sneakersActions } from './modules/sneakers/redux/actions/sneakerActions';
import { BrandActions } from './modules/brands/redux/actions/brand';
import { RaffleActions } from './modules/raffles/redux/actions/raffle';
import { ShopActions } from './modules/shops/redux/actions/shop';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopupComponent,
    InitArticleComponent,
    DashboardComponent,
    RegisterComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
   NgReduxModule,
   BrowserAnimationsModule,
   MDBBootstrapModule.forRoot(),
   ReactiveFormsModule,
   FormsModule,
   ToastrModule.forRoot()
  
  ],
  providers: [
    SneakersServiceService,
    LoginActions,
    sneakersActions,
    BrandActions,
    RaffleActions,
    ShopActions

  ],
  bootstrap: [AppComponent],
})
export class AppModule { 

  constructor(private ngRedux: NgRedux<AppState>,
    private LoginActions: LoginActions,
    private sneakersActions: sneakersActions ,
    private BrandActions: BrandActions ,
    private RaffleActions : RaffleActions,
    private ShopActions : ShopActions
    ){
      this.init();
    const currState = window.sessionStorage.getItem('reduxState') ? JSON.parse(window.sessionStorage.getItem('reduxState')) : {};
    
    ngRedux.configureStore(rootReducer,currState);
    let app = ngRedux.getState()
    window.sessionStorage.setItem('reduxState', JSON.stringify(app));

    ngRedux.subscribe(()=>{
      window.sessionStorage.setItem('reduxState', JSON.stringify(ngRedux.getState()))
    })
  }

  init(){
    this.sneakersActions.listSneakers();
    this.RaffleActions.findRaffles();
    this.BrandActions.listBrands();

  }

}
