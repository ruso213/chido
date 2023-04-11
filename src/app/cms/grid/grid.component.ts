import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { max } from 'date-fns';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  
  constructor(
    private formGroup : FormBuilder
  ) {
    this.initForm()
    this.initform0To100()
  }
  registerFormPrac !: FormGroup;
  form0To100 !: FormGroup
  initForm(){
    this.registerFormPrac = this.formGroup.group({
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
    this.form0To100 = this.formGroup.group({
      minNum: [0, []],
      maxNum : [100, []]
    },
    {
      validators : MyValidators.confirmRange
    })
  }
}
