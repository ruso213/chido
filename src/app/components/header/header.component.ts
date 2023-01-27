import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { DarkModeService } from 'src/app/service/dark-mode.service';
import { ProductsService } from 'src/app/service/products.service';
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
    private detailsUser: UserDetailsService

  ){}
    proInCar = 0
    darkmode = false
    ngOnInit(){
      this.changeDarkMode.darkMode$.subscribe(item => this.darkmode = item)
      this.productsService.mycart$.subscribe(item => this.proInCar = item.length)
      this.detailsUser.userDetails$.subscribe(item => this.userDetails = item)

      /* this.asdfs =  this.productsService.mycart$.pipe(
        takeUntil(this.unsubsribe)
      ).subscribe(item => this.proInCar = item.length) */
    }
    userDetails : userDetails  = {
      name:``,
      email:``,
      id: ``
    }
    changeDarkModeTrueFalse(){
      this.changeDarkMode.darkModeChange()
    }
   /*  ngOnDestroy(){
      this.asdfs.unsubscribe()
      this.unsubsribe.next()
      this.unsubsribe.complete()
    } */
}
