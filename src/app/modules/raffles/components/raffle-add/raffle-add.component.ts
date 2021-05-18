import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RaffleVO } from 'src/app/models/RaffleVO';
import { ShopActions } from 'src/app/modules/shops/redux/actions/shop';
import { AppState } from 'src/app/redux/interfaces/app-state';
import { AppStateShops } from 'src/app/redux/interfaces/app-state-shops';
import { RaffleActions } from '../../redux/actions/raffle';

@Component({
  selector: 'app-raffle-add',
  templateUrl: './raffle-add.component.html',
  styleUrls: ['./raffle-add.component.scss']
})
export class RaffleAddComponent implements OnInit {
  @select(['shops']) shopsState$: Observable<AppStateShops>;

  shops = [];
  form = new FormGroup({
    tienda: new FormControl(),
    fecha: new FormControl()

  });
  constructor(private redux : NgRedux<AppState>, private RaffleActions : RaffleActions, private ShopActions : ShopActions) { 
    this.shopsState$.subscribe((response)=>{
    this.shops = response.list.list;

    })
  }

  ngOnInit(): void {
    this.ShopActions.listShop();
  }

  onSubmit(){
    let tienda = this.form.get('tienda').value;
    let fecha = this.form.get('fecha').value;
    let raffle : RaffleVO;
    raffle = {
      tienda: tienda,
      fecha: new Date(fecha).toString(),
      participaciones: 0,
    }
    console.log(raffle);
    this.RaffleActions.createRaffle(raffle);

  }

}
