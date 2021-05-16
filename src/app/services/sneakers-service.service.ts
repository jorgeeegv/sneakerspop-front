import { Injectable } from '@angular/core';
import { SneakerVO } from '../models/SneakerVO';
import { BrandVO } from '../models/BrandVO';


@Injectable({
  providedIn: 'root'
})
export class SneakersServiceService {

  private sneakers: SneakerVO[];

  constructor() {
    this.sneakers = [

      {
        id : 1,
        nombre : "Jordan 1",
        marca : "Nike x Jordan",
        img: 'https://i.ibb.co/XWFsgFW/air-jordan-1-retro-high-white-university-blue-black-1-1000.png',
        stock : 13,
        precio : 120
      },
      {
        id: 2,
        nombre: "Jordan 1",
        marca: "Nike x Jordan",
        img: 'https://i.ibb.co/XWFsgFW/air-jordan-1-retro-high-white-university-blue-black-1-1000.png',
        stock: 13,
        precio: 120
      },
      {
        id: 3,
        nombre: "Jordan 1",
        marca: "Nike x Jordan",
        stock: 13,
        img: 'https://i.ibb.co/XWFsgFW/air-jordan-1-retro-high-white-university-blue-black-1-1000.png',
        precio: 120
      },
      {
        id: 4,
        nombre: "Jordan 1",
        marca: "Nike x Jordan",
        stock: 13,
        img: 'https://i.ibb.co/XWFsgFW/air-jordan-1-retro-high-white-university-blue-black-1-1000.png',
        precio: 120
      },
      {
        id: 5,
        nombre: "Jordan 1",
        marca: "Nike x Jordan",
        stock: 13,
        img: 'https://i.ibb.co/XWFsgFW/air-jordan-1-retro-high-white-university-blue-black-1-1000.png',
        precio: 120
      }, 
      {
        id: 6,
        nombre: "Jordan 1",
        marca: "Nike x Jordan",
        stock: 13,
        img: 'https://i.ibb.co/XWFsgFW/air-jordan-1-retro-high-white-university-blue-black-1-1000.png',
        precio: 120
      },

    ];



  }

  getSneakers(){
    return this.sneakers;
  }




}
