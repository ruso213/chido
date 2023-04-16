import { Component , Input, EventEmitter, Output,OnInit } from '@angular/core';
import { ApiGetService } from 'src/app/service/api-get.service';
import { DarkModeService } from 'src/app/service/dark-mode.service';
import { ProductsService } from 'src/app/service/products.service';
import { Productos } from 'src/app/types/tipos';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.scss']
})
export class TargetsComponent implements OnInit{
    constructor(
      private productsService : ProductsService,
      private api : ApiGetService,
      private darkmode: DarkModeService
    ){}
    @Input() details:string = ``
    @Output() addProducts = new EventEmitter<Productos>()
    @Output() ToggleCart = new EventEmitter<string>()
    @Output() viewDetailsItem = new EventEmitter<string>()
    @Output() productADD = new EventEmitter<Productos>()
    price = 0
    togglebttn = false
    
    @Input() a= ``
    @Input() tglcars= false
    @Input() product: Productos ={
      title: '',
      price:0,
      description:'',
      images:[''],
      category: {
        id:0,
        name: '',
        image: '',
        creationAt:'' ,
        updatedAt: '',
      },
      id: 0,
      creationAt: '',
      updatedAt: '',
    }
    productSearch : Productos ={
      title: '',
      price:0,
      description:'',
      images:[''],
      category: {
        id:0,
        name: '',
        image: '',
        creationAt:'' ,
        updatedAt: '',
      },
      id: 0,
      creationAt: '',
      updatedAt: '',
    }
   /*  ngOnInit(){
      this.root= `details/${this.root}`
    }
    see(){
      console.log(this.root);
      
    } */
    darkmodechnfde=false
    ngOnInit(): void {
      this.darkmode.darkMode$.subscribe(item => this.darkmodechnfde = item)
    }
    viewDetails(pro: string){      
      this.viewDetailsItem.emit(pro)
      console.log(`this.a `);
      console.log(this.product);
      console.log(`this.a `);
      
    }
    addProduct(){

      this.productsService.addTotal(this.product)
      this.productADD.emit(this.product)
      /* this.addProducts.emit(this.product)
      console.log(this.details); */
      
    }
    toggleBTN(){
      this.ToggleCart.emit(this.product.title)
      console.log(this.product.title);
      
    }
}
