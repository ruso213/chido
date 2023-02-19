import { Component , Input, EventEmitter, Output,OnInit } from '@angular/core';
import { ApiGetService } from 'src/app/service/api-get.service';
import { DarkModeService } from 'src/app/service/dark-mode.service';
import { ProductsService } from 'src/app/service/products.service';
import { Productos } from 'src/app/types/tipos';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent {
  constructor(
    private Api_http : ApiGetService,
    private darkMode: DarkModeService,
    private productService : ProductsService
  ){}
  @Output() addProducts = new EventEmitter<Productos>()
  @Input() productDetailsadd : Productos ={
    id:`a`,
    title: `a`,
    price: 0,
    category:{
      id: 0,
      name: ``,
      typeImg: ``
    },
    images:[],
    description:`a`
  }
  @Input()trueDetails = false
  darkModeChange =false
  ngOnInit(){
    this.darkMode.darkMode$.subscribe(item => this.darkModeChange = item)
    
  }
  
  addProductTocart(){
    this.productService.addTotal(this.productDetailsadd)
    this.addProducts.emit(this.productDetailsadd)
  }
  editProduct(){
    const id = this.productDetailsadd.id
    const changes = {
      title : `my product cool`
    }
    this.Api_http.editProduct(id , changes).subscribe(item => console.log(item
    ))
  }
}
