import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Productos } from 'src/app/types/tipos';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit{
  constructor(
    private prodcutservice : ProductsService
  ){}
  productos : Productos[] = []
  ngOnInit(): void {
    this.prodcutservice.mycart$.subscribe(item => {
      this.productos = item
      this.precioTotal()
    })
  }
  precioTotals = 0
  precioTotalDescuento =0
  precioTotal(){
    let total = 0
    for (const product of this.productos) {
      total += product.price;
      this.precioTotals = total
      this.precioTotalDescuento = total - total *.10
    }

  }
}
