import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandVO } from 'src/app/models/BrandVO';
import { AppStateBrands } from 'src/app/redux/interfaces/app-state-brands';
import { BrandActions } from '../../redux/actions/brand';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.scss']
})
export class BrandsListComponent implements OnInit {
  @select(['brands']) brandList$: Observable<AppStateBrands>;


  brands : BrandVO[];
  constructor( private BrandsActions : BrandActions) { }

  ngOnInit(): void {
    this.brandList$.subscribe((response)=>{
      this.brands = response.list.list;
    })

  }

}
