import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { DarkModeService } from 'src/app/service/dark-mode.service';
import { ProductsService } from 'src/app/service/products.service';
import { TokenService } from 'src/app/service/token.service';
import { UserDetailsService } from 'src/app/service/user-details.service';
import { Productos } from 'src/app/types/tipos';
import { userDetails } from 'src/app/types/user-models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private productsService :ProductsService,
    private changeDarkMode : DarkModeService,
    private detailsUser: UserDetailsService,
    private authservice: AuthService,
    private tokenServie : TokenService

  ){
    productsService.load()
  }
  categoryChange = false
    proInCar : number = 0
    darkmode = false
    userDetails : userDetails | null = null
    trufal= false
    cerrarSsn = false
    ngOnInit(){
      this.changeDarkMode.darkMode$.subscribe(item => this.darkmode = item)
      this.productsService.mycart$.subscribe(item => this.proInCar = item.length)
      this.authservice.user$.subscribe(item => this.userDetails = item)
      this.authservice.profile().subscribe(item => this.userDetails = item)   
      this.changeDarkMode.cerrarSsn$.subscribe(item => this.cerrarSsn = item)
      
  
    }
    changeTrueFalse(){
      this.trufal = !this.trufal
    }
    changeDarkModeTrueFalse(){
      this.changeDarkMode.darkModeChange()
    }

    logOut(){
      this.changeDarkMode.trueFal()

    }
    
  }
