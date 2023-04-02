import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/service/user-details.service';
import { userDetails } from 'src/app/types/user-models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  constructor(
    private userDetailsService : UserDetailsService
  ){}
    
  profile  : userDetails = {
    name:``,
    id:``,
    roles:`admin`,
    email: ``
  }
    ngOnInit(): void {
      this.profile = JSON.parse(localStorage.getItem(`userDetail`) || `{}`)
    }
}
