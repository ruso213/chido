import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { PageNotFoundComponent } from './website/components/page-not-found/page-not-found.component';


const routes: Routes = [
  
  {
    path:``,
    loadChildren : () => import(`./website/website.module`).then(m => m.WebsiteModule)
    
    
  },
  {
    path: `cms`,
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
