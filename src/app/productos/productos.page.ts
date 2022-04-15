import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  public productos: any[]=[];
  public _texto: string ='';
  public total:number = 0;
  constructor(
    public servicio: ServiciosService,
    public loading: LoadingController,
    public alert :AlertController
  ) { }

  ngOnInit() {
   this.Cargar_Productos();
  }
  async Cargar_Productos(){
  let l = await this.loading.create();
  l.present();
    this.servicio.Producto_Listado(this._texto)
    .subscribe((data: any)=>{
      this.productos = data.info.items;
      this.total = data.info.total;
      l.dismiss();
    },(error: any)=>{
      l.dismiss();
    });
  }
  Editar(item: any,ionItemSliding: IonItemSliding){
    ionItemSliding.close();
    this.servicio.ira('/producto/'+item.id);
  }
 async Borrar(item: any,ionItemSliding: IonItemSliding){
  let alert =await this.alert.create({
    header: 'Eliminar',
    message:'Seguro que desea eliminar el producto ['+ item.nombre +']?',
    buttons:[
      {
        text:'Si',
        handler: async ()=>{
//Servicio para borrar
let l = await this.loading.create({
  message: 'Borrando....'
}
);
l.present();
this.servicio.Producto_Borrar(item.id).subscribe((data: any)=>{
      this.Cargar_Productos();
l.dismiss();
    },(error: any)=>{
      l.dismiss();
    });
        }
      },
      {
        text:'No',
        handler: ()=>{
        }
      }
    ]
  });
  alert.present();
    ionItemSliding.close();
  }

}
