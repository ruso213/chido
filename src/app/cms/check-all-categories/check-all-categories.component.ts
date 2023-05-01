import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { categories } from 'src/app/types/tipos';

@Component({
  selector: 'app-check-all-categories',
  templateUrl: './check-all-categories.component.html',
  styleUrls: ['./check-all-categories.component.scss']
})
export class CheckAllCategoriesComponent implements OnInit {
  constructor(
    private categorieServive : CategoryService,
    private router : Router,
  ){}
  ngOnInit(): void {
    this.categorieServive.getAllCategories().subscribe(items =>{
      this.categories = items
      console.log(this.categories);
      
    })
  }
  categories : categories[]= [] 
  
  deletecategory(id: number){
    this.categorieServive.deleteCategory(id).subscribe(item =>{
      console.log(item);
      this.categorieServive.getAllCategories().subscribe(i => this.categories = i)
    }, error =>{
      console.log(error);
      
    })
  }
  editarCategoria(category : categories){
    this.categorieServive.Category = category
    this.router.navigate([`cms/editCategory/${category.id}`])
  }
}
