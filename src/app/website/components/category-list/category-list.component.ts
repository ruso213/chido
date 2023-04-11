import { Component, OnInit } from '@angular/core';
import { ApiGetService } from 'src/app/service/api-get.service';
import { CategoryService } from 'src/app/service/category.service';
import { categories } from 'src/app/types/tipos';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit{
  constructor(
    private apiServiced: CategoryService
  ){  }
    allCategories : categories[]=[] 
    ngOnInit(): void {
      this.apiServiced.getAllCategories().subscribe(item => {
        this.allCategories = item
        console.log(item);
        
      })
    }

    
}
