import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Studentdetails } from 'src/app/models/StudentDetails';
import { Issue } from 'src/app/models/issue';
import { Studentatten } from 'src/app/models/Deployed';

@Component({
  selector: 'app-rstudentwise',
  templateUrl: './rstudentwise.component.html',
  styleUrls: ['./rstudentwise.component.css']
})
export class RstudentwiseComponent implements OnInit {
  @ViewChild("mbno", { static: false }) mbno: ElementRef;
  assign: Issue[];
  t: string;
  assign1: Studentdetails[];
  q: string;
  sub: Studentdetails[];
  sub1: Studentatten;
  p:Number = 1;
  count:Number = 10;
  constructor(public traineeservice: TraineeserviceService) {
    this.sub1 = new Studentatten();
  }
  search($event) {
    let q = $event.target.value;
    console.log("test = " + q);
    this.traineeservice.getMobile(q).subscribe(data => { this.assign1 = data; })
    let r = this.mbno.nativeElement.value;
    let s = r.split("/");
    this.t = s[1];
    console.log("final" + this.t);
  }
  studentwise: any[];
  selected(value: string) {
    console.log("Value =" + value)
    let a = value.split("/");
    this.traineeservice.getstudentwise(a[1]).subscribe(data => {
      this.studentwise = data;
    });
  }
  ngOnInit() {
    this.sub1 = new Studentatten();
  }

}