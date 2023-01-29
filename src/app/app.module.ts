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
