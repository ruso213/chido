import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
//ESTRUCTURA DE CREACION DE COMPONENTES CON LA API DE ANGULAR FORMS
@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR, 
      //NG_VALUE_ACCESSOR es un token predefinido en 
      //Angular que se utiliza para establecer la comunicación entre un 
      //componente y un modelo de datos
      useExisting: forwardRef( ()=> PlusComponent),
      //esta línea de código se utiliza para establecer que el componente 
      //PlusComponent se va a utilizar como proveedor para el servicio definido por el token NG_VALUE_ACCESSOR
      //Esto se hace utilizando la función forwardRef() para obtener una referencia anticipada al componente 
      //antes de que sea completamente definido.
      multi: true
    }
  ]
})
export class PlusComponent implements ControlValueAccessor, OnInit {
  value = 0
  onChange = (_:any)=>{}
  onTouch = ()=>{}
  ngOnInit(): void {
    
  }
  sub(){
    this.value= this.value + 1
    console.log(this.value);
    this.onTouch()
    this.onChange(this.value)
  }
  rest(){
    this.value = this.value- 1
    console.log(this.value);
    this.onTouch()
    this.onChange(this.value)
  }
  writeValue(obj: number): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch =         fn
  }
}
