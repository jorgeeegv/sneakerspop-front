import { Component, Input, OnInit } from '@angular/core';
import { SneakerVO } from 'src/app/models/SneakerVO';

@Component({
  selector: 'app-sneaker-item',
  templateUrl: './sneaker-item.component.html',
  styleUrls: ['./sneaker-item.component.scss']
})
export class SneakerItemComponent implements OnInit {

  @Input() sneaker : SneakerVO;

  constructor() { }

  ngOnInit(): void {
  }

}
