import { Component , Input, EventEmitter, Output,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Productos } from 'src/app/types/tipos';
import { ApiGetService } from '../../service/api-get.service';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.scss']
})
export class TargetsComponent {
    constructor(
      private prod : ProductsService,
      private api : ApiGetService
    ){}
    @Input() details:string = ``
    @Output() addProducts = new EventEmitter<Productos>()
    @Output() ToggleCart = new EventEmitter<string>()
    @Output() viewDetailsItem = new EventEmitter<string>()
    
    @Input() root = ``
    price = 0
    togglebttn = false
    @Input() tglcars= false
    @Input() product: Productos ={
      id:``,
      title: ``,
      price: 0,
      category:``,
      images:[],
      description:``
    }
    productSearch : Productos ={
      id:``,
      title: ``,
      price: 0,
      category:``,
      images:[],
      description:``
    }
   /*  ngOnInit(){
      this.root= `details/${this.root}`
    }
    see(){
      console.log(this.root);
      
    } */
    viewDetails(pro: string){      
      this.viewDetailsItem.emit(pro)
    }
    addProduct(){
      this.addProducts.emit(this.product)
      console.log(this.details);
      
    }
    toggleBTN(){
      this.ToggleCart.emit(this.product.title)
      console.log(this.product.title);
      
    }
}
