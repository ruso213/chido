import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { DarkModeService } from 'src/app/service/dark-mode.service';
import { TokenService } from 'src/app/service/token.service';
import { UserDetailsService } from 'src/app/service/user-details.service';
import { userDetails } from 'src/app/types/user-models';

@Component({
  selector: 'app-target-login',
  templateUrl: './target-login.component.html',
  styleUrls: ['./target-login.component.scss']
})
export class TargetLoginComponent implements OnInit {
  
  constructor(
    private darkmode : DarkModeService,
    private formulario: FormBuilder,
    private authService: AuthService,
    private detailsUser: UserDetailsService,
    private Token: TokenService

  ){
    this.initForm()
  }
  ngOnInit(): void {
    this.darkmode.darkMode$.subscribe(item => this.darkmodes = item )
    this.darkmode.loginOrCreate$.subscribe(item => this.loginOrCreate = !item)
 }
  loginOrCreate=false
  darkmodes = false
  registerForm! :FormGroup;
  /* userDetails : userDetails  = {
    name:``,
    email:``,
    id: ``
  } */
  changeTrueFalse(){
    this.darkmode.changeLoginOrCreate()
  }
   logins(){
    
    let {email , password} = this.registerForm.value
    return  this.authService.loginAndGet(email , password).subscribe(item => {
      this.detailsUser.saveDetailsUser(item)
          
        
        
   
  }
    )
    
  }
  
  
  initForm(){
    this.registerForm = this.formulario.group({
       email : ['',[ Validators.required, Validators.minLength(5),Validators.email]],
       password : ['', [Validators.required,  Validators.minLength(4)]],
     })
     console.log(this.registerForm);
     
   }
}
