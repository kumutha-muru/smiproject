import { Component, OnInit } from '@angular/core';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Issue } from 'src/app/models/issue';
import { Batchatten } from 'src/app/models/Deployed';
import { Studentdetails } from 'src/app/models/StudentDetails';

@Component({
  selector: 'app-rbatchwise',
  templateUrl: './rbatchwise.component.html',
  styleUrls: ['./rbatchwise.component.css']
})
export class RbatchwiseComponent implements OnInit {
  batchwise: Batchatten[];
  bat: string[];
  absent: number[];
  sub1: Batchatten;
  assign: Issue[];
  present: number[];
  constructor(public traineeservice: TraineeserviceService) {
  }
  selected(value: string) {
    this.traineeservice.getbatchwise(value).subscribe(data => {
      this.batchwise = data;
      this.bat = this.batchwise["student"];
      this.absent = this.batchwise["absent"];
      this.present = this.batchwise["present"];
    });
  }
  addValues(a: string, b: string): string {
    return parseInt(a) + parseInt(b) + ""
  }
  ngOnInit() {
    this.sub1 = new Batchatten();
    this.traineeservice.getbatch().subscribe(data => { this.assign = data; })
  }
}
