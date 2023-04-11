import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './layout/layout.component';
import { TasksComponent } from './tasks/tasks.component';
import { CategoryComponent } from './category/category.component';
import { CheckAllCategoriesComponent } from './check-all-categories/check-all-categories.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
