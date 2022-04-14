import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    public servicio: ServiciosService
  ) { }

  ngOnInit() {
  }

}
