import { Component, Input } from '@angular/core';
import { ApiGetService } from 'src/app/service/api-get.service';
import { ProductsService } from 'src/app/service/products.service';
import { Productos } from 'src/app/types/tipos';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
    constructor(
      private apiGet :ApiGetService,
      private productService: ProductsService
    ){}

    tglcar= false
    trueDetails= false
    title = ``
    productos :Productos[]=[] 
    shoppingCart :Productos[]=[] 
    productSearch : Productos ={
      id:``,
      title: ``,
      price: 0,
      category:``,
      images:[],
      description:``
    }
    ngOnInit(){
      this.apiGet.getAllProducts().subscribe(data=> this.productos = data)
    }
    
    addProduct(event:Productos ){
      const productobuscado : Productos | undefined = this.productos.find(item => item === event)
      if(productobuscado){
        this.productService.addTotal(productobuscado)
      }
    }

    viewDetails(pro : string){
    this.apiGet.getProductId(pro).subscribe(data => this.productSearch = data )
    this.trueDetails = !this.trueDetails
    
      
    }
    toggleDetails(){
      this.trueDetails = !this.trueDetails
    }
    togglecart(event:string){    
      this.tglcar= !this.tglcar
      let titlerecort = event.split(` `)
    
      this.title = titlerecort.splice(0,2).join(` `)
      
      
      setTimeout(()=> {
        this.tglcar= !this.tglcar
      },3000)
    }
}
