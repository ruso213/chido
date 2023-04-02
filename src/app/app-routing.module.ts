import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './website/components/page-not-found/page-not-found.component';


const routes: Routes = [
  
  {
    path:``,
    loadChildren : () => import(`./website/website.module`).then(m => m.WebsiteModule)
    
    
  },
  {
    path: `cms`,
    canActivate: [AdminGuard],
    loadChildren: () => import(`./cms/cms.module`).then(m => m.CmsModule)
  },
  {
    path:`**`,
    component:PageNotFoundComponent

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
