import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { auth, userDetails } from '../types/user-models';
import { ApiGetService } from './api-get.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpsC: HttpClient,
    private ApiService: ApiGetService,
    
    
  ) { }
  private Api_url = `${this.ApiService.oneProduct}/auth`
  private profileToken = new BehaviorSubject<string>(``)
  profileToken$ = this.profileToken.asObservable()
   
  login(email:string , password: string){
    
    return this.httpsC.post<auth>(`${this.Api_url}/login`, {email , password})
  }
  takeToken(token:string){
    this.profileToken.next(token)
    
    
  }
  profile(){
    return this.httpsC.get<userDetails>(`${this.Api_url}/profile`,{
      headers:{
        Authorization:`bearer ${this.profileToken.value}`
      }
    } )
  }
  
}
