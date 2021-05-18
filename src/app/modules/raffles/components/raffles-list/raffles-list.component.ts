import { NgRedux, select } from '@angular-redux/store';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RaffleVO } from 'src/app/models/RaffleVO';
import { AppState } from 'src/app/redux/interfaces/app-state';
import { AppStateRaffles } from 'src/app/redux/interfaces/app-state-raffles';
import { RaffleActions } from '../../redux/actions/raffle';

@Component({
  selector: 'app-raffles-list',
  templateUrl: './raffles-list.component.html',
  styleUrls: ['./raffles-list.component.scss']
})
export class RafflesListComponent implements OnInit {
  @select(['raffles']) rafflesState$: Observable<AppStateRaffles>;
  total : number ;
  raffles : RaffleVO [];
  constructor( private redux: NgRedux<AppState>, private RafflesActions : RaffleActions) {
    this.rafflesState$.subscribe( (response) =>{
      this.raffles = response.list.list;
      this.total = response.list.count;
    })
   }

  ngOnInit(): void {
  }

  date(fecha: string){
    return new Date (fecha);
  }

}
