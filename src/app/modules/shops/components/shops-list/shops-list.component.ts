import { Component, OnInit } from '@angular/core';
import { ShopVO } from 'src/app/models/ShopVO';

@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.scss']
})
export class ShopsListComponent implements OnInit {

  shops : ShopVO [];
  constructor() { }

  ngOnInit(): void {
  }

}
