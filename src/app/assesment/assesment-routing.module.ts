import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignComponent } from './assign/assign.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path:'assign',
    component:AssignComponent
  },
  {
    path:'update',
    component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssesmentRoutingModule { }
