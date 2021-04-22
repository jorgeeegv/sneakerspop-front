import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SneakersServiceService } from './services/sneakers-service.service';
import { PopupComponent } from './shared/popup/popup.component';
import { SneakersModule } from './modules/sneakers/sneakers.module';
import { SneakerListComponent } from './modules/sneakers/components/sneaker-list/sneaker-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SneakersModule
  ],
  providers: [
    SneakersServiceService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
