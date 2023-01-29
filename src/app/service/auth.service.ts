import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { auth, userDetails } from '../types/user-models';
import { ApiGetService } from './api-get.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpsC: HttpClient,
    private ApiService: ApiGetService,
    private tokenAcess : TokenService

   /*  fdadsffffffffffffffffffffffffffffffffffasdfasdfasdfasdf
    fdadsffffffffffffffffffffffffffffffffffasdfasdfasdfasdf
    fdadsffffffffffffffffffffffffffffffffffasdfasdfasdfasdf
    fdadsffffffffffffffffffffffffffffffffffasdfasdfasdfasdf
    fdadsffffffffffffffffffffffffffffffffffasdfasdfasdfasdf */
    
    
  ) { }
  private Api_url = `${this.ApiService.oneProduct}/auth`
  private token = ``
   
   

  login(email:string , password: string){
    
    return this.httpsC.post<auth>(`${this.Api_url}/login`, {email , password}).pipe(
      tap( item => {
        
        this.tokenAcess.saveToken(item.access_token)
      }
      )
    )
  }
  
  profile(){
    
    return this.httpsC.get<userDetails>(`${this.Api_url}/profile`,{} )
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(() => this.profile()),
    )
  }
}
