import { Component, OnInit } from '@angular/core';
import { SneakerVO } from 'src/app/models/SneakerVO';
import { SneakersServiceService } from 'src/app/services/sneakers-service.service';

@Component({
  selector: 'app-sneaker-list',
  templateUrl: './sneaker-list.component.html',
  styleUrls: ['./sneaker-list.component.scss']
})
export class SneakerListComponent implements OnInit {

  sneakers: Array<SneakerVO>;
  title = "ULTIMOS LANZAMIENTOS DE SNEAKERS"
  constructor(private SneakerService:SneakersServiceService) {
   }

  ngOnInit(): void {
    this.sneakers = this.SneakerService.getSneakers();
    console.log(this.sneakers);

  }

}
