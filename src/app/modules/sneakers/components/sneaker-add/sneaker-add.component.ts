import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SneakerVO } from 'src/app/models/SneakerVO';
import { AppState } from 'src/app/redux/interfaces/app-state';
import { sneakersActions } from '../../redux/actions/sneakerActions';

@Component({
  selector: 'app-sneaker-add',
  templateUrl: './sneaker-add.component.html',
  styleUrls: ['./sneaker-add.component.scss']
})
export class SneakerAddComponent implements OnInit {
  form = new FormGroup({
    nombre: new FormControl(),
    marca: new FormControl(),
    stock: new FormControl(),
    precio: new FormControl(),
  });
  urlImage: string = null;
  newSneaker: SneakerVO = null;

  constructor(private redux: NgRedux<AppState>, private SneakersActions: sneakersActions) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let nombre = this.form.get('nombre').value;
    let marca = this.form.get('marca').value;
    let stock = this.form.get('stock').value;
    let precio = this.form.get('precio').value;
    this.newSneaker = {
      nombre: nombre,
      marca: marca,
      stock: stock,
      precio: precio,
      img: this.urlImage
    }
     this.SneakersActions.createSneaker(this.newSneaker);



  }

  async onInput(e: Event) {
    const input = e.target as HTMLInputElement;
    await this.SneakersActions.uploadImg(input.files[0]).subscribe(url => {
      if (url && url != undefined) {
        this.urlImage = url;
      }
    });
  }

}
