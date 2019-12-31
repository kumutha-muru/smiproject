import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignComponent } from './assign/assign.component';
import { UpdateComponent } from './update/update.component';
import { ReportComponent } from './report/report.component';
import { MarksComponent } from './marks/marks.component';
import { AllComponent } from './all/all.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {
    path:'assign',
    component:AssignComponent
  },
  {
    path:'report',
    component:ReportComponent
  },
  {
    path:'marks',
    component:MarksComponent
  },
  {
    path:'update',
    component:UpdateComponent
  },
  {
    path:'all',
    component:AllComponent
  },
  {
    path:'student',
    component:StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssesmentRoutingModule { }
