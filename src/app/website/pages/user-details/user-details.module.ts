import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:``,
      component: UserDetailsComponent
    }])
  ],

})
export class UserDetailsModule { }
