import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Productos } from '../types/tipos';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGetService {

  constructor(
    private Api_Http : HttpClient
  ) { }
  
  api_limit = 'https://young-sands-07814.herokuapp.com/api/products?limit=15&offset=0'
  oneProduct = `https://young-sands-07814.herokuapp.com/api/products`
  getAllProducts(){
    return this.Api_Http.get<Productos[]>(this.api_limit)
  }
  getProductId(id:string){
    return this.Api_Http.get<Productos>(`${this.oneProduct}/${id}`)
  }
}
