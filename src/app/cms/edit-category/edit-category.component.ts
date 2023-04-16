import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { categories } from 'src/app/types/tipos';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit{
  constructor(
    private categoryService : CategoryService,
    private form : FormBuilder,
    private router : Location,
    ){}
  ngOnInit(): void {
    this.onInitForm()
    this.categoryToUpdate = this.categoryService.Category
  }
  formEditCategory !: FormGroup
  truefalse = false
  categoryToUpdate : categories= {
    name : '',
    id: 0,
    image: ''
  }
  EditCategory(){
    if(this.formEditCategory.valid){

      this.categoryService.putCategory(this.categoryToUpdate.id, this.formEditCategory.value['name']).subscribe(()=>{
        this.router.back()
      })
    }
    else{
      console.log('tamal');
      
    }
  }
  onInitForm(){
    this.formEditCategory = this.form.group({
      name : ['', [Validators.required, Validators.minLength(4)]]
    })
  }
}
