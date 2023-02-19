import { NgModule, Input,EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from "swiper/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './website/components/login/login.component';
import { CreateAcountComponent } from './website/components/create-acount/create-acount.component';
import { StoreComponent } from './website/components/store/store.component';
import { DescriptionComponent } from './website/components/description/description.component';
import { HeaderComponent } from './website/components/header/header.component';
import { BonitoComponent } from './website/components/bonito/bonito.component';
import { TargetsComponent } from './website/components/targets/targets.component';
import { ViewDetailsComponent } from './website/components/view-details/view-details.component';
import { BttnLoadMoreComponent } from './website/components/bttn-load-more/bttn-load-more.component';
import { NiceButtonComponent } from './website/components/nice-button/nice-button.component';
import { ErrorSComponent } from './website/components/error-s/error-s.component';
import { RegisterComponent } from './website/components/register/register.component';
import { TargetLoginComponent } from './website/components/target-login/target-login.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ShoppingCartComponent } from './website/pages/shopping-cart/shopping-cart.component';
import { SettingsBarComponent } from './website/components/settings-bar/settings-bar.component';
import { UserDetailsComponent } from './website/pages/user-details/user-details.component';
import { BodyShopingCartComponent } from './website/components/body-shoping-cart/body-shoping-cart.component';
import { ItemsInCartComponent } from './website/components/items-in-cart/items-in-cart.component';
import { ItemsInCartDetailComponent } from './website/components/items-in-cart-detail/items-in-cart-detail.component';
import { TotalComponent } from './website/components/total/total.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { CategoryListComponent } from './website/components/category-list/category-list.component';
import { PageNotFoundComponent } from './website/components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './website/pages/product-detail/product-detail.component';
import { LayoutComponent } from './website/components/layout/layout.component';
@NgModule({
  declarations: [
    AppComponent,
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