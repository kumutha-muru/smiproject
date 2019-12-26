import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { RdailyComponent } from './rdaily/rdaily.component';
import { RmonthlyComponent } from './rmonthly/rmonthly.component';
import { RtdailyComponent } from './rtdaily/rtdaily.component';
import { RtmonthlyComponent } from './rtmonthly/rtmonthly.component';
import { RtbatchwiseComponent } from './rtbatchwise/rtbatchwise.component';
import { RstudentwiseComponent } from './rstudentwise/rstudentwise.component';
import { RbatchwiseComponent } from './rbatchwise/rbatchwise.component';
import { RsintrainingComponent } from './rsintraining/rsintraining.component';
import { RsdeployedComponent } from './rsdeployed/rsdeployed.component';
import { RsdiscontinuedComponent } from './rsdiscontinued/rsdiscontinued.component';
import { RsterminatedComponent } from './rsterminated/rsterminated.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReportsComponent, RdailyComponent, RmonthlyComponent,
     RtdailyComponent, RtmonthlyComponent, RtbatchwiseComponent, 
     RstudentwiseComponent, RbatchwiseComponent, RsintrainingComponent, RsdeployedComponent,
      RsdiscontinuedComponent, RsterminatedComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReportsModule { }
