import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiGetService } from './api-get.service';
import { createUserDTO, user } from '../types/user-models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


    constructor(
      private httpsC: HttpClient,
      private ApiService: ApiGetService
    ) { }
    private Api_url = `${this.ApiService.oneProduct}/users/`


    create(dto: createUserDTO){
      return this.httpsC.post<user>(this.Api_url, dto)
    }
    getAllUsers(){
      return this.httpsC.get(this.Api_url)
    }
    
}
