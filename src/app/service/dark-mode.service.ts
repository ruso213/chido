import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkMode = new BehaviorSubject<boolean>(false)
  darkMode$ = this.darkMode.asObservable()

  private cerrarSsn =new BehaviorSubject<boolean>(false)
  cerrarSsn$ = this.cerrarSsn.asObservable()

  private loginOrCreate = new BehaviorSubject<boolean>(true)
  loginOrCreate$ = this.loginOrCreate.asObservable()
  constructor() { }
  darkModeChange(){
    this.darkMode.next(!this.darkMode.value) 
    console.log(this.darkMode);
    
  }

  changeLoginOrCreate(){
    this.loginOrCreate.next(!this.loginOrCreate.value)
    console.log(this.loginOrCreate.value);
    
  }

  trueFal(){
    this.cerrarSsn.next(!this.cerrarSsn.value)
  }
}
 