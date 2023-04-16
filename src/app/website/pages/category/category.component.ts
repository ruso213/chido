import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, ObservableInput, pipe, switchMap } from 'rxjs';
import { ApiGetService } from 'src/app/service/api-get.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductsService } from 'src/app/service/products.service';
import { Productos } from 'src/app/types/tipos';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  constructor(
    private route : ActivatedRoute,
    private apiGetService : ApiGetService,
    private categoryService : CategoryService

  ){}
  categoryid : string = ``
  categoryName  = ``
  productsArr : Productos[]= []
  limit = 9
  offset = 0
  productSearch: Productos = {
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
  trueDetails = false
  tglcar = false
  title = ``
  ngOnInit(): void {
    this.route.paramMap.pipe(
        switchMap((param) => {
            this.categoryid = param.get(`id`)!
            if(this.categoryid){
              return this.categoryService.getAllProductCategory(this.categoryid , this.limit, this.offset);
            }
            return [];
          }
        )
    ).subscribe(item => {
      this.productsArr = item
      this.categoryName = this.productsArr[0].category.name

    })
    

  }
  loadMore(){
    this.offset += this.limit
    this.categoryService.getAllProductCategory(this.categoryid ,this.limit, this.offset).subscribe(data=> this.productsArr= this.productsArr.concat(data) )
  }

  viewDetails(produ: string){
    this.apiGetService.getProductId(produ).subscribe(
      item => {
        this.productSearch = item
        console.log(this.productSearch);
        this.changetruFal()
      }
    )    
  }
  changetruFal(){
    this.trueDetails = !this.trueDetails

  }
  changeTRUfalISLA(prod: Productos){
    this.tglcar = !this.tglcar
    this.title = prod.title
    setTimeout(()=> {
      this.tglcar= !this.tglcar
    },3000)
  }
}
