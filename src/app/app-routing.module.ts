import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StoreComponent } from './components/store/store.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';

const routes: Routes = [
  {
    path:'hola',
    component:LoginComponent

  },
  {
    path:``,
    component:StoreComponent

  },
  {
    path:`details`,
    component:ViewDetailsComponent

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
