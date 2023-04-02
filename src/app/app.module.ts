import { NgModule, Input,EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from "swiper/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './interceptors/token.interceptor';

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