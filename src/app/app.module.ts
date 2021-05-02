import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SneakersServiceService } from './services/sneakers-service.service';
import { PopupComponent } from './shared/popup/popup.component';
import { InitArticleComponent } from './shared/init-article/init-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopupComponent,
    InitArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    SneakersServiceService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
