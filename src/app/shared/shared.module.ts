import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TargetsComponent } from './targets/targets.component';
import { RouterModule } from '@angular/router';
import { BttnLoadMoreComponent } from './bttn-load-more/bttn-load-more.component';
import { ViewDetailsComponent } from './view-details/view-details.component';



@NgModule({
  declarations: [
    TargetsComponent,
    BttnLoadMoreComponent,
    ViewDetailsComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    TargetsComponent,
    BttnLoadMoreComponent,
    ViewDetailsComponent
  ]
})
export class SharedModule { }
