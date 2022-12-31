import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private productsService :ProductsService
  
  ){}
  proInCar = 0

    ngOnInit(){
      this.productsService.mycart$.subscribe(item => this.proInCar = item.length)
    }
}
