import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ApiGetService } from 'src/app/service/api-get.service';
import { CategoryService } from 'src/app/service/category.service';
import { categories, productCreate } from 'src/app/types/tipos';

@Component({
  selector: 'app-smart-create-product',
  templateUrl: './smart-create-product.component.html',
  styleUrls: ['./smart-create-product.component.scss']
})
export class SmartCreateProductComponent implements OnInit{
  constructor(
    private apiGetService : ApiGetService,
    private categoryService : CategoryService
  ){}
    categoriesId : categories[]= []
  ceateProduct(product : productCreate){
    this.apiGetService.createProduct(product).subscribe()
  }
  ngOnInit(): void {
    this.getAllCategories()
  }
  getAllCategories(){
    this.categoryService.getAllCategories().pipe(
      /* tap(
        item => {
            for(let i =0; i <item.length;  i++){
              this.categoriesId.push(item[i].id)
              console.log(this.categoriesId);
            }
          }) */
    ).subscribe(i => this.categoriesId = i)
  }

}
