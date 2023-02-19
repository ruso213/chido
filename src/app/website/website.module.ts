import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { LoginComponent } from './components/login/login.component';
import { CreateAcountComponent } from './components/create-acount/create-acount.component';
import { StoreComponent } from './components/store/store.component';
import { DescriptionComponent } from './components/description/description.component';
import { HeaderComponent } from './components/header/header.component';
import { BonitoComponent } from './components/bonito/bonito.component';
import { TargetsComponent } from './components/targets/targets.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { BttnLoadMoreComponent } from './components/bttn-load-more/bttn-load-more.component';
import { NiceButtonComponent } from './components/nice-button/nice-button.component';
import { ErrorSComponent } from './components/error-s/error-s.component';
import { RegisterComponent } from './components/register/register.component';
import { TargetLoginComponent } from './components/target-login/target-login.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { SettingsBarComponent } from './components/settings-bar/settings-bar.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { BodyShopingCartComponent } from './components/body-shoping-cart/body-shoping-cart.component';
import { ItemsInCartComponent } from './components/items-in-cart/items-in-cart.component';
import { ItemsInCartDetailComponent } from './components/items-in-cart-detail/items-in-cart-detail.component';
import { TotalComponent } from './components/total/total.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    CreateAcountComponent,
    StoreComponent,
    DescriptionComponent,
    HeaderComponent,
    BonitoComponent,
    TargetsComponent,
    ViewDetailsComponent,
    BttnLoadMoreComponent,
    NiceButtonComponent,
    ErrorSComponent,
    RegisterComponent,
    TargetLoginComponent,
    ShoppingCartComponent,
    SettingsBarComponent,
    UserDetailsComponent,
    BodyShopingCartComponent,
    ItemsInCartComponent,
    ItemsInCartDetailComponent,
    TotalComponent,
    CategoryComponent,
    CategoryListComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class WebsiteModule { }
