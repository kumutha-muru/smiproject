import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Issue, Assessment } from 'src/app/models/issue';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
assigntest:Issue[];
assessment:Assessment;
status:string;
  constructor(private router: Router, public traineeservice: TraineeserviceService) {

  }
  onSubmit() {
    this.assessment.status="assigned";
    console.log(this.assessment.status)
    this.traineeservice.assesmentassign(this.assessment).subscribe(result =>
       {this.assessment=result; console.log("connection status:"+this.assessment)});
    }

  ngOnInit() {
    this.assessment=new Assessment();
    this.traineeservice.getbatch().subscribe(data =>
       { this.assigntest = data;console.log(this.assigntest) })
  }

}
