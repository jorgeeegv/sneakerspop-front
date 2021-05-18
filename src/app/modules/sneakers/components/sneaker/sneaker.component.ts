import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SneakerVO } from 'src/app/models/SneakerVO';
import { AppStateSneakers } from 'src/app/redux/interfaces/app-state-sneakers';
import { sneakersActions } from '../../redux/actions/sneakerActions';

@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.scss']
})
export class SneakerComponent implements OnInit {
  @select(['sneakers']) sneakerSelected$: Observable<AppStateSneakers>;
  sneaker : SneakerVO;
  constructor(private redux : NgRedux<AppStateSneakers>, private SneakerActions : sneakersActions, private route : ActivatedRoute) { 
    this.sneakerSelected$.subscribe((response) => {
      if (response.selectedSneaker && response.selectedSneaker != null) {
        this.sneaker = response.selectedSneaker;
      }
    })
  
  }

  ngOnInit(): void {
    this.SneakerActions.findSneaker(this.route.snapshot.params.sneakerId);

  }

}
