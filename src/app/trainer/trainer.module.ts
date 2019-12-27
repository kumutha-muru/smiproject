import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerRoutingModule } from './trainer-routing.module';
import { AddtComponent } from './addt/addt.component';
import { ViewtComponent } from './viewt/viewt.component';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatTableModule} from '@angular/material'; 
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [AddtComponent, ViewtComponent],
  imports: [
    CommonModule,
    TrainerRoutingModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,NgxPaginationModule
  ]
})
export class TrainerModule { }
