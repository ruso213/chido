import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyApiService {

  constructor(
    private apiHttp : HttpClient
  ) { }
    private key = 'achgvpVPESPjfiqWqRiSrkWEop5jav6N'
    getGiphs(busqueda:string){
      return this.apiHttp.get(`https://api.giphy.com/v1/stickers/search?api_key=${this.key}&q=${busqueda}&limit=25&offset=0&rating=g&lang=en`)
      .pipe(
        map((item :any) =>{
          return item.data.map((item:any) => item.images.downsized   )
        })
      )
    }
}
