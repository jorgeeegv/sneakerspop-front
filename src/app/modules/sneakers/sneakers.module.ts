import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SneakersRoutingModule } from './sneakers-routing.module';
import { SneakerListComponent } from './components/sneaker-list/sneaker-list.component';
import { SneakerItemComponent } from './components/sneaker-item/sneaker-item.component';
import { SneakerAddComponent } from './components/sneaker-add/sneaker-add.component';
import { SneakerEditComponent } from './components/sneaker-edit/sneaker-edit.component';
import { SneakerComponent } from './components/sneaker/sneaker.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { sneakersActions } from './redux/actions/sneakerActions';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    SneakerListComponent,
    SneakerItemComponent,
    SneakerAddComponent,
    SneakerEditComponent,
    SneakerComponent
  ],
  imports: [
    CommonModule,
    SneakersRoutingModule,
    MDBBootstrapModule.forRoot(),
        ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers : [
    sneakersActions
  ]

})
export class SneakersModule { }
