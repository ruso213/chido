import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { max } from 'date-fns';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.initForm()
    this.initform0To100()
    this.initformCreateAut()
  }
  registerFormPrac !: FormGroup;
  form0To100 !: FormGroup;
  formCreateAut !:FormGroup;
  private initformCreateAut(){
    this.formCreateAut = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      number: [200,[Validators.required, Validators.minLength(3)]],
      address : this.formBuilder.array([]) ,

    })

    this.formCreateAut.get('number')?.valueChanges.subscribe(
      i=> console.log(i))
  }

  createNewFormArray(){
    this.formAut.push(this.createAddress())
  }
  submitAddress(){
    if(this.formCreateAut.valid){
      console.log(this.formCreateAut.value);
      
    }
  }
  private createAddress(){
    return this.formBuilder.group({
      zip : ['', [Validators.required]],
      text : ['', [Validators.required]],
    })
  }
  get formAut(){
    return this.formCreateAut.get('address') as FormArray
  }
  initForm(){
    this.registerFormPrac = this.formBuilder.group({
      name: ['',[Validators.minLength(3),Validators.email,Validators.required]],
      password: ['',[Validators.minLength(5), MyValidators.passwordValid,Validators.required]],
      confirmPassword: ['', [Validators.minLength(5), MyValidators.passwordValid,Validators.required]],
      type : ['company', [Validators.required]],
      companyName: ['',[Validators.required]]
    },{
      validators : MyValidators.confirmPasswords

    })

    this.typeField?.valueChanges.subscribe(i =>{
      console.log(i + 'gola');
      if(i === 'company'){
        this.companyName?.setValidators([Validators.required])
      }else{
        this.companyName?.setValue('')
        this.companyName?.setValidators(null)

      }
      this.companyName?.updateValueAndValidity()
    })
  }
  get typeField(){
    return this.registerFormPrac.get('type')
  }

  get companyName(){
    return this.registerFormPrac.get('companyName')
  }
  submit(){
    if(this.registerFormPrac.valid){
      
      console.log(this.registerFormPrac.value);
      return {todo_bien_carnal :  "todo_bien_carnal"}
    }
    else{
      console.log('falta completar');
      
      return this.registerFormPrac.markAllAsTouched()

    }

  }

  initform0To100(){
    this.form0To100 = this.formBuilder.group({
      minNum: [0, []],
      maxNum : [100, []]
    },
    {
      validators : MyValidators.confirmRange
    })
  }
}
