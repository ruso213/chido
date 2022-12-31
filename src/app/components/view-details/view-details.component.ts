import { Component , Input, EventEmitter, Output,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Productos } from 'src/app/types/tipos';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent {
  constructor(
    private addProducts : ProductsService
  ){}
  @Output() ToggleCart = new EventEmitter()
  @Input() productDetailsadd : Productos ={
    id:``,
    title: ``,
    price: 0,
    category:``,
    images:[],
    description:``
  }
  @Input()trueDetails = false
  ngOnInit(){
    console.log(`this.productDetails`);
    console.log(this.productDetailsadd);
    console.log(`this.productDetails`);
    
  }
  toggleBTN(){
    
  }
  addProduct(){
    
  }
}
