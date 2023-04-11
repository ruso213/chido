import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { auth } from '../types/user-models';
import { ApiGetService } from './api-get.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private httpsC: HttpClient,
    private ApiService: ApiGetService,
    
  ) { }
/*   private Api_url = `${this.ApiService.oneProduct}/users`
 */  /*  private profileToken = new BehaviorSubject<string>(``)
  profileToken$ = this.profileToken.asObservable() */

  saveToken(token:string){
  localStorage.setItem(`token` , token)
  /*         this.profileToken.next(token)
  */    
 }

  getToken(){
    return localStorage.getItem(`token`)
  }
 
  removeToken(){
    localStorage.removeItem(`token`)
  }
}
