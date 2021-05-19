import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SneakerVO } from 'src/app/models/SneakerVO';
import { AppStateLogin } from 'src/app/redux/interfaces/app-state-login';
import { AppStateSneakers } from 'src/app/redux/interfaces/app-state-sneakers';
import { SneakersServiceService } from 'src/app/services/sneakers-service.service';
import { sneakersActions } from '../../redux/actions/sneakerActions';

@Component({
  selector: 'app-sneaker-list',
  templateUrl: './sneaker-list.component.html',
  styleUrls: ['./sneaker-list.component.scss']
})
export class SneakerListComponent implements OnInit {
  @select(['sneakers']) sneakersList$: Observable<AppStateSneakers>;

  sneakers: Array<SneakerVO>;
  title = "ULTIMOS LANZAMIENTOS DE SNEAKERS";
  count :number;
  constructor(private redux : NgRedux<AppStateSneakers>, private SneakerActions : sneakersActions) {
   }

  ngOnInit(): void {
    this.SneakerActions.clearSneaker();
     this.SneakerActions.listSneakers();
    this.sneakersList$.subscribe((response)=>{
      this.sneakers =response.list.list;
      this.count = response.list.count;
    });


  }

}
