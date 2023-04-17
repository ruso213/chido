import { Injectable, OnInit } from '@angular/core';
import { Productos } from '../types/tipos';
import { BehaviorSubject } from "rxjs";
import { ApiGetService } from './api-get.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService  {
    private mycart = new BehaviorSubject<Productos[]>([]) 
    mycart$ = this.mycart.asObservable()
    
    load(){
      const a = JSON.parse(localStorage.getItem(`shoppingCart`)|| `[]`)
      this.mycart.next(a)
    }
    addTotal(prod : Productos){
    
      const a = JSON.parse(localStorage.getItem(`shoppingCart`)|| `[]`)
      a.push(prod)
      this.mycart.next(a)
      localStorage.setItem(`shoppingCart`, JSON.stringify(a))

    }
    deleteProduct(prod : Productos){
      
      const productIndex = this.mycart.value.findIndex(item => prod.id === item.id)
      
      if (productIndex > -1) {
        this.mycart.value.splice(productIndex, 1);
        localStorage.setItem(`shoppingCart`,JSON.stringify(this.mycart.value))
      }
      console.log(productIndex)
      
    }
    
    
}
