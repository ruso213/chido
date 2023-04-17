import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiGetService } from 'src/app/service/api-get.service';
import { CategoryService } from 'src/app/service/category.service';
import { ActivatedRoute, Params, Router,  } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  constructor(
    private categoryService: CategoryService,
    private formGroup : FormBuilder,
    private afStorage: AngularFireStorage, 
    private route : ActivatedRoute,
    private router : Location,
  ){
    
  }
    categoryId = 0
    ngOnInit(): void {
      
        this.route.params.subscribe((params:Params) => {
          this.categoryId = params['id']
          if(this.categoryId){
            this.formEditInit()
            console.log(this.categoryId);
          }else{
            this.formCreInit()
            console.log('estas en formCredINIT');
          }
        })
      
    }
    truefalse =false
    formCreateCategory !: FormGroup
    submit(){
      if(this.formCreateCategory.valid){
        if(this.categoryId){
          this.putCategory()
          console.log('putCategory');
          
        }else{
          this.submitCreateCategory()
          console.log('CreateCategory');

        }
      }else{
        console.log('INVALID');
        return this.formCreateCategory.markAllAsTouched()        
      }
    }
    private submitCreateCategory(){
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

    private putCategory(){
        this.categoryService.putCategory(this.categoryId, this.formCreateCategory.get('name')?.value ).subscribe(item => {
          this.router.back()

        })    
    }
    uploadFile(event : any){
      const image = event.target.files[0]
      const name = `image${this.numeroAleatorio()}.png`
      const ref = this.afStorage.ref(name)
      const upload = this.afStorage.upload(name , image)  
      console.log(name); 
      upload.snapshotChanges().pipe(
        finalize(() => {
          const urlImages$ = ref.getDownloadURL()
          urlImages$.subscribe(item => {
            this.imageField?.setValue(item)
          })
        })
      ).subscribe()
    }
    
    numeroAleatorio(){
      const numero = Math.random()
      let numeroAstring : string | string[] = numero.toString().split('')
      numeroAstring[1] = '1'
      numeroAstring = numeroAstring.join('')
      return numeroAstring;
    }

    formCreInit(){
      this.formCreateCategory = this.formGroup.group(
        {
          name:['', [Validators.required, Validators.minLength(4)]],
          image : ['', [Validators.required]]
        })
    }
    formEditInit(){
      this.formCreateCategory = this.formGroup.group({
        name : ['', [Validators.required, Validators.minLength(4)]]
      })
    }
    
    get imageField(){
      return this.formCreateCategory.get('image')
    }
  }
