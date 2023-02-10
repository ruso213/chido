import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StoreComponent } from './components/store/store.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent

  },
  {
    path:``,
    component:StoreComponent

  },
  {
    path:`shopping-cart`,
    component:ShoppingCartComponent

  },
  {
    path:`user-detail`,
    component:UserDetailsComponent

  },
  {
    path:`category/:id`,
    component:CategoryComponent

  },
  {
    path:`product/:id`,
    component:ProductDetailComponent

  },
  {
    path:`**`,
    component:PageNotFoundComponent

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
