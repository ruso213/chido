import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { userDetails } from '../types/user-models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService{

  constructor(
    private authService: AuthService
  ) { }
  private userDetails = new BehaviorSubject<userDetails>({
    name:``,
    id:``,
    email:``
  })
  
  userDetails$= this.userDetails.asObservable()
  saveDetailsUser(userDetail:userDetails){
    this.userDetails.next(userDetail)
    console.log(this.userDetails.value);
    
  }
}
