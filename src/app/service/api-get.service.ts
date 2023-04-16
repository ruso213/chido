import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from "@angular/common/http";
import { categories, EditProductDTO, ProductDTO, Productos } from '../types/tipos';
import { BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGetService {

  constructor(
    private Api_Http : HttpClient
  ) { }
  
  api_limit = ' https://api.escuelajs.co/api/v1/products?'
  oneProduct = ` https://api.escuelajs.co/api/v1`
 
  getProductId(id:string){
    console.log(`hola mundo`);
    
    return this.Api_Http.get<Productos>(`${this.oneProduct}/products/${id}`).pipe(
      retry(3),
      catchError((respones : HttpErrorResponse) => {
        if(respones.status === 500){
          console.log(`no server`);
          
        }else if(respones.status === 404){
          console.log(`no se encontro`);
          
        }
        else if(respones.status === 200){

        }
        return throwError(`ups`)
      }
      
      )
    )
  }
  createProduct(data : ProductDTO){
    return this.Api_Http.post<Productos>(this.api_limit, data )
  }
  editProduct(id : number ,data : EditProductDTO){
    return this.Api_Http.put<Productos>(`${this.oneProduct}/products/${id}`, data )
  }
  getAllProductsOfPage(limit : number , offset: number){
    return this.Api_Http.get<Productos[]>(`${this.api_limit}`, {
      params : {limit , offset}
    }).pipe(retry(3))
  }
 
}
