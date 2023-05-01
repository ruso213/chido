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
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { SmartCreateProductComponent } from './smart-create-product/smart-create-product.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent,
    GridComponent,
    TasksComponent,
    CategoryComponent,
    CheckAllCategoriesComponent,
    EditCategoryComponent,
    CreateProductComponent,
    SmartCreateProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CmsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialMModule
  ]
})
export class CmsModule { }
