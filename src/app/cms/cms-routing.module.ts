import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './layout/layout.component';
import { TasksComponent } from './tasks/tasks.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
