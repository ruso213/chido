import { Component, Input } from '@angular/core';
import { ApiGetService } from 'src/app/service/api-get.service';
import { DarkModeService } from 'src/app/service/dark-mode.service';
import { ProductsService } from 'src/app/service/products.service';
import { ProductDTO, Productos } from 'src/app/types/tipos';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
    constructor(
      private apiGet :ApiGetService,
      private productService: ProductsService,
      private DarkModeChange: DarkModeService
    ){}
      _logAn = `stringpas`
      set funti( stringpa : string){
        this._logAn = stringpa
        const a = 1 + 1
        console.log(a);
         
        
      }
    tglcar= false
    darkmode= false
    trueDetails= false
    errorChange = false
    limit = 9
    offset = 0
    title = ``
    productos :Productos[]=[] 
    productSearch : Productos ={
      id:``,
      title: ``,
      price: 0,
      category:``,
      images:[],
      description:``
    }
    createNewItem(){
      let produ : ProductDTO = {
        title:`IDK`,
        categoryId : 2,
        description: `besto produyct in the world`,
        price: 2000,
        images: [``]
      }
      this.apiGet.createProduct(produ).subscribe(item => this.productos.unshift(item))
    }
    ngOnInit(){
      this.loadMore()
      this.DarkModeChange.darkMode$.subscribe(item => this.darkmode = item)
      }
    loadMore(){
      this.apiGet.getAllProductsOfPage(this.limit, this.offset).subscribe(data=> this.productos= this.productos.concat(data) )
      this.offset += this.limit
    }
    addProduct(event:Productos){
      
      
      const productobuscado : Productos | undefined = this.productos.find(item => item == event)
      console.log(event);
      console.log(this.productos);
      
      if(productobuscado){
        this.productService.addTotal(productobuscado)
      }else{
        this.productService.addTotal(event)
        this.tglcar= !this.tglcar
        let titlerecort = event.title.split(` `)
      
        this.title = titlerecort.splice(0,2).join(` `)
        
        
        setTimeout(()=> {
          this.tglcar= !this.tglcar
        },3000)
      }
    }

    viewDetails(pro : string){
    this.apiGet.getProductId(pro).subscribe(data => {
      this.productSearch = data
      this.toggleDetails()
    }, error => {
      this.toggleError()
      console.error(`${error.statusText} ${error.status}`)
    })   
    }

    toggleError(){
      this.errorChange = !this.errorChange
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
