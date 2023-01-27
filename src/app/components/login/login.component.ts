import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(
    private darkmode : DarkModeService,
    private userServie:UsersService
  ){

  }

  ngOnInit(): void {
    this.darkmode.loginOrCreate$.subscribe(item => this.boxPosition = item)
  }
  boxPosition = false
  changetrueFalse(){
    this.darkmode.changeLoginOrCreate()
  }
  getall(){
    this.userServie.getAllUsers().subscribe(item => console.log(item))
   }
}
