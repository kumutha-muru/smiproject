import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssesmentRoutingModule } from './assesment-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignComponent } from './assign/assign.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [AssignComponent, UpdateComponent],
  imports: [
    CommonModule,
    AssesmentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AssesmentModule { }
