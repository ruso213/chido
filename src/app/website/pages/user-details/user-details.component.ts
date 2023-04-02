import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/service/user-details.service';
import { user, userDetails } from 'src/app/types/user-models';
import { AuthService } from "./../../../service/auth.service";
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  constructor(
    private authService : AuthService
  ){}
    
  profile  : user = {
    name:``,
    id : ``,
    role : ``,
    email: ``,
    password : ``
    
  }
    ngOnInit(): void {
      this.authService.user$.subscribe(i => {
        if(i){this.profile = i
          console.log(this.profile);
          
        }
      })
    }
}
