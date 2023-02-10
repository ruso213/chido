import { NgModule, Input,EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from "swiper/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { TokenInterceptor } from './interceptors/token.interceptor';
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
@NgModule({
  declarations: [
    AppComponent,
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SwiperModule
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi :true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
