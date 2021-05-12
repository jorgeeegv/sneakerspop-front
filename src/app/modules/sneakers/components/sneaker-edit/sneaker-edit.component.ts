import { Component, OnInit } from '@angular/core';
import { SneakerVO } from 'src/app/models/SneakerVO';

@Component({
  selector: 'app-sneaker-edit',
  templateUrl: './sneaker-edit.component.html',
  styleUrls: ['./sneaker-edit.component.scss']
})
export class SneakerEditComponent implements OnInit {

  sneaker : SneakerVO;
  constructor() { }

  ngOnInit(): void {
  }

}
