import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
/* import { StoreComponent } from './components/store/store.component';*/
import { CategoryComponent } from './pages/category/category.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { StoreComponent } from './pages/store/store.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserDetailsModule } from './pages/user-details/user-details.module';
import {AuthGuard} from '../guards/auth.guard';
const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:`/home`,
        pathMatch:`full`
      },
      {
        path:'home',
        component:StoreComponent
        
    
      },
      {
        path:'login',
        component:LoginComponent
    
      },
      {
        path:`shopping-cart`,
        component:ShoppingCartComponent
    
      },
      {
        path:`category`,
        loadChildren: () => import("./pages/category/category.module").then(i => i.CategoryModule)
        
      },
      {
        path:`user-detail`,
        loadChildren: ()=> import(`./pages/user-details/user-details.module`).then(i => i.UserDetailsModule),
        canActivate: [AuthGuard]
      },
    
      {
        path:`product/:id`,
        component:ProductDetailComponent
    
      },
    ]

  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule { }
