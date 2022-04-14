import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor( private router: Router) { }
  ira(url: string){
this.router.navigateByUrl(url);
  }
}
