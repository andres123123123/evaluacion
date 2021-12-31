import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatCardModule} from '@angular/material/card'
@NgModule({
  declarations: [],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCardModule,
  ]
})
export class MaterialModule { }
