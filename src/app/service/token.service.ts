import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiGetService } from './api-get.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

    constructor(
      private httpsC: HttpClient,
        private ApiService: ApiGetService
    ) { }
    private Api_url = `${this.ApiService.oneProduct}/users`

    
}
