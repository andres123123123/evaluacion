import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


const routes:Routes =[
  {
    path:'',
    component: HomeComponent,
    children:[
      
      {
        path: '**',
        redirectTo:''
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class TopRoutingModule { }
