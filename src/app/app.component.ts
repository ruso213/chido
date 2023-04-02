import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { TokenService } from './service/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Personal_Pro';
  constructor(
    private authService: AuthService,
    private tokenService : TokenService
  ){}

  ngOnInit(): void {
    const token = this.tokenService.getToken()
    if(token ){
        this.authService.profile()
        
    }
  }
}
