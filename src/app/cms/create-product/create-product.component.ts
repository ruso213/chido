import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  constructor(
    private productService : ProductsService,
    private formBuilder : FormBuilder
  ){
    this.iniitForm()
  }
  formProduct !: FormGroup;

  private iniitForm(){
    this.formProduct = this.formBuilder.group({
      
    })
  }
}
