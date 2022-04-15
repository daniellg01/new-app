import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private URL_API: string ="http://localhost/API/";

  constructor(
    private router: Router,
    private http: HttpClient
    ) { }

  ira(url: string){
this.router.navigateByUrl(url);
  }
  Producto_Listado(_texto: string =''){
    const formData = new FormData()
    formData.append('texto', ''+ _texto);
   return this.http.post(this.URL_API + 'list_products', formData);

  }
  Producto_Borrar(_id: number){
    const formData = new FormData()
    formData.append('producto_id', ''+_id);
   return this.http.post(this.URL_API + 'destroy_product', formData);
   }
   ver_total(){
    const formData = new FormData()
    formData.append('texto', '');
   return this.http.post(this.URL_API + 'obtener_totales', formData);
   }
}
