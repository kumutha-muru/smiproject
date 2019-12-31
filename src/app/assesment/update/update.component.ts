import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Router } from '@angular/router';
import { Issue, Assessment, assess } from 'src/app/models/issue';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  assigntest: Assessment[];
  assigntest1: Assessment[];
  assigntest2: Assessment[];
  bat: any;
  bat1: Assessment[];
  batchName: any[];
  //id: Assessment;
  fix: any;
  f = new Array();
  p:Number = 1;
  count:Number = 10;
  @ViewChild("aid", { static: false }) aid: ElementRef;
  @ViewChild("totmark", { static: false }) totmark: ElementRef;
  @ViewChild("stid", { static: false }) stid: ElementRef;
  @ViewChild("marks", { static: false }) marks: ElementRef;

  snm: any;
  tot: any;
  sid: any;
  totalmark: any[];
  assId: string[];
  s: assess;
  // m= new Array();

  constructor(private router: Router, public traineeservice: TraineeserviceService) { }
  ngOnInit() {
    this.fix = new Array();
    this.traineeservice.assesmentupdate().subscribe(data => {
      this.assigntest = data;
      console.log(this.assigntest);
      this.bat = this.assigntest["batchName"];
      this.bat1 = this.assigntest["assignedAssesment"];

      this.assId = this.bat1[0].assignAssesmentId;
    })
  }

  onSubmit(a: string) {
    this.traineeservice.a=a;
    /*
    this.traineeservice.update1(a).subscribe(data => {
      this.assigntest1 = data; console.log(this.assigntest1)
      this.sid = this.assigntest1["studentId"];
      this.tot = this.assigntest1["total"];
      this.snm = this.assigntest1["studentName"];
      for (var i = 0; i < this.tot.length; i++) {
        this.f[i] = this.tot[i];
      }
    })*/
  }
  
 
}




