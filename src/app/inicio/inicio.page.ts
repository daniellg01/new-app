import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public total_usuario: number = 0;
  public total_clientes: number = 0;
  public total_pedidos: number = 0;
  public total_productos: number = 0;
  constructor(
    public servicio: ServiciosService
  ) { }

  ngOnInit() {
    this.servicio.ver_total()
    .subscribe((data: any)=>{
      this.total_usuario= data.Usuarios;
      this.total_clientes= data.Clientes;
      this.total_pedidos= data.Pedidos;
      this.total_productos= data.Productos;
    },(error: any)=>{
    });
  }

}
