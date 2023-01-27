import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DarkModeService } from 'src/app/service/dark-mode.service';
import { UsersService } from 'src/app/service/users.service';
import { createUserDTO } from 'src/app/types/user-models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private darkmode : DarkModeService,
    private formulario: FormBuilder,
    private userServie: UsersService
    
  ){
    this.initForm()
  }
  registerForm! :FormGroup;
  darkmodes = false
  register : createUserDTO={
    password:'',
    email:'',
    name:''
  } 
  loginOrCreate = false
  changeTrueFalse(){
    this.darkmode.changeLoginOrCreate()
  }
  ngOnInit(): void {
    this.darkmode.darkMode$.subscribe(item => this.darkmodes = item )
    this.darkmode.loginOrCreate$.subscribe(item => this.loginOrCreate = item)
  }
  createUser(){
    return this.userServie.create(this.registerForm.value).subscribe(item=> console.log(item))  
    
  }
  initForm(){
   this.registerForm = this.formulario.group({
      name : ['',[ Validators.required, Validators.minLength(4)]],
      email : ['',[ Validators.required, Validators.minLength(5),Validators.email]],
      password : ['', [Validators.required,  Validators.minLength(5)]],
    })
    console.log(this.registerForm);
    
  }
  getall(){
   this.userServie.getAllUsers().subscribe(item => console.log(item))
  }
}
