import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiGetService } from 'src/app/service/api-get.service';
import { CategoryService } from 'src/app/service/category.service';
import { } from '@angular/'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(
    private categoryService: CategoryService,
    private formGroup : FormBuilder,
    private apiget: ApiGetService,
    private storage : angul

  ){
    this.formCreInit()
  }
    truefalse =false
    formCreateCategory !: FormGroup
    submit(){
      this.submitCreateCategory()
    }
    private submitCreateCategory(){
      if(this.formCreateCategory.valid){
        console.log(this.formCreateCategory.value);
        
        return this.categoryService.postNewCategory(this.formCreateCategory.value).subscribe(item => {
          this.formCreateCategory.reset()
          this.formCreateCategory.markAsUntouched()
        }, e =>{
          this.truefalse = !this.truefalse
          setTimeout(() => {
            this.truefalse = !this.truefalse
          }, 6000);
        })

      }
      else{
        return this.formCreateCategory.markAllAsTouched()        
      }
      
    }
    uploadFile(){

    }
    formCreInit(){
      this.formCreateCategory = this.formGroup.group(
        {
          name:['', [Validators.required, Validators.minLength(3)]],
          image : ['', [Validators.required]]
        }
      )
    }

}
