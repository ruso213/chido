import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Productos } from 'src/app/types/tipos';

@Component({
  selector: 'app-items-in-cart',
  templateUrl: './items-in-cart.component.html',
  styleUrls: ['./items-in-cart.component.scss']
})
export class ItemsInCartComponent implements OnInit {
  constructor(
    private productService: ProductsService
  ){}
  productosEnElCarrito:Productos[] = []
  ngOnInit(): void {
    this.productService.mycart$.subscribe(item => this.productosEnElCarrito = item)
    
    
  }
  @Output() objetoEmitter = new EventEmitter<Productos>()
  
  clickDetails(item:Productos){
    const objeto = this.productosEnElCarrito.findIndex(items => items.id === item.id)
    this.objetoEmitter.emit(this.productosEnElCarrito[objeto])
    
  }
  deleletItem(prod:Productos){
    this.productService.deleteProduct(prod)    
  }
}
