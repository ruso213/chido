import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiGetService } from 'src/app/service/api-get.service';
import { ProductsService } from 'src/app/service/products.service';
import { Productos } from 'src/app/types/tipos';

@Component({
  selector: 'app-items-in-cart-detail',
  templateUrl: './items-in-cart-detail.component.html',
  styleUrls: ['./items-in-cart-detail.component.scss']
})
export class ItemsInCartDetailComponent implements OnInit {
  
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private apiGetService: ApiGetService
  ){
  }
  producto : Productos= {
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
  imagNum = 0
  paramID : string | null = ``
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((item) => {
        this.paramID = item.get(`id`)
        if(this.paramID){
          return this.apiGetService.getProductId(this.paramID)
        }
        
          return []

      
        }
      )
    ).subscribe(item =>{
      this.producto = item
    })
   
  }
  addCart(){
    this.productService.addTotal(this.producto)
  }
  imageNum(num : string){
    this.imagNum = this.producto.images.findIndex(item => item === num)
  }
}
