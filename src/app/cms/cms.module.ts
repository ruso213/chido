import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { GridComponent } from './grid/grid.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [
    LayoutComponent,
    GridComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
