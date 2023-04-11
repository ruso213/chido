import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { GridComponent } from './grid/grid.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialMModule } from '../material-m.module';
import { CategoryComponent } from './category/category.component';
import { CheckAllCategoriesComponent } from './check-all-categories/check-all-categories.component';


@NgModule({
  declarations: [
    LayoutComponent,
    GridComponent,
    TasksComponent,
    CategoryComponent,
    CheckAllCategoriesComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialMModule
  ]
})
export class CmsModule { }
