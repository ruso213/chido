import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { ApiGetService } from 'src/app/service/api-get.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  constructor(
    private apiGetService : ApiGetService,
    private formBuilder : FormBuilder,
    private afStorage: AngularFireStorage, 

  ){
    this.iniitForm()
  }
  formProduct !: FormGroup;
  ceateProduct(){
    console.log(this.formProduct.value)
    const product = this.formProduct.value
    this.apiGetService.createProduct({
      title: this.formProduct.get('title')?.value,
      price: this.formProduct.get('price')?.value,
      description: this.formProduct.get('description')?.value,
      categoryId: this.formProduct.get('categoryId')?.value,
      images: [this.formProduct.get('images')?.value],

    }).subscribe(item => console.log(this.formProduct.value)
    )
  }


  private iniitForm(){
    this.formProduct = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      price : [, [Validators.required, Validators.min(1)]],
      description : ['', [Validators.required, Validators.minLength(4)]],
      categoryId : [ , [Validators.min(1)]],
      images : [ '', [Validators.required]]
    })
  }

  subirIMG(event: any){
    const image = event.target.files
    const name = `image${this.numeroAleatorio()}.png`
    const ref=  this.afStorage.ref(name)
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
  get imageField(){
    return this.formProduct.get('images')
  }
}
