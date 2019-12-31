import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssesmentRoutingModule } from './assesment-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignComponent } from './assign/assign.component';
import { UpdateComponent } from './update/update.component';
import { ReportComponent } from './report/report.component';
import { MarksComponent } from './marks/marks.component';
import { AllComponent } from './all/all.component';
import { StudentComponent } from './student/student.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [AssignComponent, UpdateComponent, ReportComponent, MarksComponent, AllComponent, StudentComponent],
  imports: [
    CommonModule,
    AssesmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class AssesmentModule { }
