import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './layout/layout.component';
import { TasksComponent } from './tasks/tasks.component';
import { CategoryComponent } from './category/category.component';
import { CheckAllCategoriesComponent } from './check-all-categories/check-all-categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { SmartCreateProductComponent } from './smart-create-product/smart-create-product.component';

const routes: Routes = [
  {
    path : ``,
    component:LayoutComponent,
    children: [
      {
        path : ``,
        redirectTo:`grid`,
        pathMatch: `full`
      },
      {
        path: `grid`,
        component:GridComponent
      },
      {
        path: `tasks`,
        component:TasksComponent
      },
      {
        path: `category`,
        component:CategoryComponent
      },
      {
        path: `checkCategories`,
        component:CheckAllCategoriesComponent
      },
      {
        path : 'editCategory/:id',
        component: CategoryComponent
      },
      {
        path : 'product',
        component:SmartCreateProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
