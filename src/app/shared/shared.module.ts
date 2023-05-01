import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TargetsComponent } from './targets/targets.component';
import { RouterModule } from '@angular/router';
import { BttnLoadMoreComponent } from './bttn-load-more/bttn-load-more.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { PlusComponent } from './AngularComponent/plus/plus.component';
import { GiphyComponent } from './giphy/giphy.component';
import { MaterialMModule } from '../material-m.module';



@NgModule({
  declarations: [
    TargetsComponent,
    BttnLoadMoreComponent,
    ViewDetailsComponent,
    PlusComponent,
    GiphyComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialMModule
  ],
  exports:[
    TargetsComponent,
    BttnLoadMoreComponent,
    ViewDetailsComponent,
    PlusComponent,
    GiphyComponent
  ]
})
export class SharedModule { }
