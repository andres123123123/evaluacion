import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRoutingModule } from './top-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './home/home.component';
import { PaginatePipe } from './pipes/paginate.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    PaginatePipe,
  ],
  imports: [
    CommonModule,
    TopRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ]
})
export class TopModule { }
