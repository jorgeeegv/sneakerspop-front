import { Component, OnInit } from '@angular/core';
import { BrandVO } from 'src/app/models/BrandVO';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.scss']
})
export class BrandsListComponent implements OnInit {

  brands : BrandVO[];
  constructor() { }

  ngOnInit(): void {
    this.brands = [
      {
        nombre : "Nike",
        stockTotal : 234,
        link : "www.nike.es"
      },
      {
        nombre: "Puma",
        stockTotal: 46,
        link: "www.puma.es"
      },
      {
        nombre: "Adidas",
        stockTotal: 100,
        link: "www.adidas.es"
      },
      {
        nombre: "Gucci",
        stockTotal: 100,
        link: "www.gucci.com"
      },
      {
        nombre: "OFF WHITE",
        stockTotal: 100,
        link: "www.offwhite.com"
      },
    ]


  }

}
