import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { categories } from 'src/app/types/tipos';

@Component({
  selector: 'app-check-all-categories',
  templateUrl: './check-all-categories.component.html',
  styleUrls: ['./check-all-categories.component.scss']
})
export class CheckAllCategoriesComponent implements OnInit {
  constructor(
    private categorieServive : CategoryService
  ){}
  ngOnInit(): void {
    this.categorieServive.getAllCategories().subscribe(items =>{
      this.categories = items
      console.log(this.categories);
      
    })
  
    
  }
  deletecategory(id: number){
    this.categorieServive.deleteCategory(id).subscribe(item =>{
      console.log(item);
      
    }, error =>{
      console.log(error);
      
    })
  }
  categories : categories[]= [] 
}
