import { Component, OnInit } from '@angular/core';
import { SneakerVO } from 'src/app/models/SneakerVO';

@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.scss']
})
export class SneakerComponent implements OnInit {

  sneaker : SneakerVO;
  constructor() { }

  ngOnInit(): void {
    this.sneaker =   {
      id: 6,
      nombre: "Jordan 1",
      marca: "Nike x Jordan",
      stock: 13,
      img: 'jordan1.png',
      precio: 120
    }
  }

}
