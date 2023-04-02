import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { userDetails } from '../types/user-models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService{

  constructor(
  ) { }
  private userDetails = new BehaviorSubject<userDetails>({
    name:``,
    id:``,
    email:``,
    roles : `admin`
  })
  
  userDetails$= this.userDetails.asObservable()
  saveDetailsUser(userDetaile:userDetails){
    localStorage.setItem(`userDetail` , JSON.stringify(userDetaile) )
    this.userDetails.next(JSON.parse(localStorage.getItem(`userDetail`)|| `{}`))
    
    
  }
}
