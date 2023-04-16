import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos, categories } from '../types/tipos';
import { ApiGetService } from './api-get.service';
import { BehaviorSubject, catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private Api_Http : ApiGetService,
    private httpc: HttpClient,

  ) { }
  Category :categories={
    name: '',
    id : 0,
    image:''
  } 
  getAllProductCategory(id: string , limit : number , offset: number){
    return this.httpc.get<Productos[]>(`${this.Api_Http.oneProduct}/categories/${id}/products`, {
      params: {limit , offset}
    })
  }
  getAllCategories(){
    return this.httpc.get<categories[]>(`${this.Api_Http.oneProduct}/categories/`)
  }

  postNewCategory(data: Partial<categories>){
    return this.httpc.post<categories[]>(`${this.Api_Http.oneProduct}/categories/`,data).pipe(
      catchError(e =>{
        return e
      })
    )
  }

  putCategory(id : number, name : string){
    return this.httpc.put(`${this.Api_Http.oneProduct}/categories/${id}`,{
      'name': name
    })
  }

  deleteCategory(id : number){
    return this.httpc.delete(`${this.Api_Http.oneProduct}/categories/${id}`,).pipe(
      catchError(e =>{
        return e
      })
    )
  }
}
