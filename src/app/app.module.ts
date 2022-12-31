import { NgModule, Input,EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
