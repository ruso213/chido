import { Injectable, OnInit } from '@angular/core';
import { Productos } from '../types/tipos';
import { BehaviorSubject } from "rxjs";
import { ApiGetService } from './api-get.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    private shoppingCar :Productos[] =[]
    private mycart = new BehaviorSubject<Productos[]>([]) 
    mycart$ = this.mycart.asObservable()

    addTotal(prod : Productos){
      this.shoppingCar.push(prod)
      this.mycart.next(this.shoppingCar)
      console.log(`rewdrer`);
      console.log(this.shoppingCar); 
      console.log(`rewdrer`);
      
    }
    getTotal(){
      return this.shoppingCar.length
      
    }
    
}
