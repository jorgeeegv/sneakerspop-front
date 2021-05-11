import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-init-article',
  templateUrl: './init-article.component.html',
  styleUrls: ['./init-article.component.scss']
})
export class InitArticleComponent implements OnInit {

  images = [
    { title: 'Air Jordan Retro High', short: 'Marca : Jordan Precio: 180€', src: "https://i.ibb.co/6m4FXYH/air-jordan-1-retro-high-who-said-man-was-not-meant-to-fly-1-1000.png" },
    { title: 'Air Jordan Retro 1 Chicago', short: 'Marca : Jordan Precio: 180€', src: "https://i.ibb.co/4s5cYf4/air-jordan-1-mid-chicago-1-1000.png" },
    { title: 'Air Jordan Retro High Court Purple', short: 'Marca : Jordan Precio: 180€', src: "https://i.ibb.co/3TPdDDZ/air-jordan-1-retro-high-court-purple-white-1-1000.png" }
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }


  ngOnInit(): void {
  }

}
