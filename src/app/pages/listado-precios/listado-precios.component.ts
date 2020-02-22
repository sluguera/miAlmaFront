import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import * as M from '../../../assets/js/materialize';
import {Precio} from '../../models/precio';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-listado-precios',
  templateUrl: './listado-precios.component.html',
  styleUrls: ['./listado-precios.component.css']
})
export class ListadoPreciosComponent implements OnInit {
  @ViewChild('ModalCrear') modalCrearRef: ElementRef;
  @ViewChild('ModalEditar') modalEditarRef: ElementRef;
  modalCrear: any;
  modalEditar: any;
  precios: Precio[] = [];
  formCrear: any;
  precioSeleccionado: Precio = {idPrecio: '', valor: ''};
  constructor( private formBuilder: FormBuilder, private service: AppService) {

    this.formCrear = formBuilder.group({
      idPrecio: '',
      valor: ''
    });
  }

  ngOnInit() {

    this.modalCrear = M.Modal.init(this.modalCrearRef.nativeElement, {});
    this.modalEditar = M.Modal.init(this.modalEditarRef.nativeElement, {});


    this.getPrecios();
  }

getPrecios() {
    this.service.getPrecios().subscribe((precio: Precio[]) => {
      this.precios = precio;
    });
}
}
