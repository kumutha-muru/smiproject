import { Component, OnInit } from '@angular/core';
import { Issue } from '../../models/issue';
import { Router } from '@angular/router';
import { TraineeserviceService } from '../../traineeservice.service';
import { Studentdetails } from 'src/app/models/StudentDetails';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  batch1: Issue[]
  test: Issue;
  result: any;
  course: Issue;
  abc: number;
  sub1: any;
  assign: Issue[];
  getassign: Studentdetails[];
  obj: Studentdetails;
  r: string;
  t: string;
  present1: boolean;
  present: boolean;
  pre: string;
  app: Studentdetails;
   p: Number = 1;
  count: Number = 10;
  onOptionsSelected(value: string) {
    this.traineeservice.getassigned(value).subscribe(data => {
      this.getassign = data;
    });
  }
  constructor(private router: Router, public traineeservice: TraineeserviceService) {
  }
  onchange1(value, id, date) {
    this.obj = new Studentdetails();
    this.obj.attendanceDate = date
    this.obj.session = this.pre;
    this.present1 = value.target.checked
    this.obj.status = this.present1;
    this.obj.studentId = id;
    this.traineeservice.saveattend(this.obj).subscribe(data => { this.obj = data; })
  }
  onchange(value) {
    this.present = value.target.checked
    if (this.present === true) {
      this.pre = "Forenoon";
    }
    else {
      this.pre = "Afternoon";
    }
  }
  onSubmit() {
    this.traineeservice.saveattend1(this.obj).subscribe(data => { this.obj = data; console.log("connection status:" + this.obj) })
  }
  /*gotoadd() {
    this.router.navigate(['./reports/rdaily'])
  }*/
  ngOnInit() {
    this.obj = new Studentdetails();
    this.traineeservice.getbatch().subscribe(data => { this.assign = data; })
  }
}
