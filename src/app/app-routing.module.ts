import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
  {
    path: 'top',
    loadChildren: () => import('./top/top.module').then(m => m.TopModule)
  },
  {
    path: '',
    redirectTo:'top',
    pathMatch:'full'
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '**',
    //component:Error404Component
    redirectTo: '404'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
