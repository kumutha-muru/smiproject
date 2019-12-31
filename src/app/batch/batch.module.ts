import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchRoutingModule } from './batch-routing.module';
import { AddbComponent } from './addb/addb.component';
import { ViewbComponent } from './viewb/viewb.component';
import { FormsModule } from '@angular/forms';
import { AssignstudentComponent } from './assignstudent/assignstudent.component';
import { StudentupdationComponent } from './studentupdation/studentupdation.component';
import { BatchupdationComponent } from './batchupdation/batchupdation.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [AddbComponent, ViewbComponent, AssignstudentComponent, StudentupdationComponent, BatchupdationComponent],
  imports: [
    CommonModule,
    BatchRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class BatchModule { }
