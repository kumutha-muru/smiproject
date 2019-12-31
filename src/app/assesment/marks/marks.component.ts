import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Assessment, assess } from 'src/app/models/issue';
import { inter } from 'src/app/models/interface';
import { Router } from '@angular/router';
import { TraineeserviceService } from 'src/app/traineeservice.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
  inn:inter;
  assigntest: Assessment[];
  assigntest1: Assessment[];
  assigntest2: Assessment[];
  bat: any;
  bat1: Assessment[];
  batchName: any[];
  //id: Assessment;
  fix: any[];
  f = new Array();
  @ViewChild("aid", { static: false }) aid: ElementRef;
  @ViewChild("totmark", { static: false }) totmark: ElementRef;
  @ViewChild("stid", { static: false }) stid: ElementRef;
  @ViewChild("marks", { static: false }) marks: ElementRef;
  @ViewChild("myForm", { static: false }) myForm: ElementRef;
  @ViewChild("my", { static: false }) my: ElementRef;

  snm: any;
  tot: any;
  sid: any;
  totalmark: any[];
  assId: string[];
  s: assess;
  constructor(private router: Router, public traineeservice: TraineeserviceService) { }

  ngOnInit() {
    this.s = new assess();
    

    this.traineeservice.update1(this.traineeservice.a).subscribe(data => {
      console.log(this.traineeservice.getCourseDetails())
      this.assigntest1 = data; console.log(this.assigntest1)
      this.sid = this.assigntest1["studentId"];
      this.tot = this.assigntest1["total"];
      this.snm = this.assigntest1["studentName"];
      for (var i = 0; i < this.tot.length; i++) {
        this.f[i] = this.tot[i];
      }
    
    })
  }
  count: number = 0;
  test=new Array();
  updation(a1: string, b: string, c: string) {
    console.log(this.count);
    console.log(this.traineeservice.a + "/" + c +"/"+ b + "/" + a1)
   this.test[this.count] = this.traineeservice.a + "/" + c +"/"+ b + "/" + a1;
   
    this.count++;
  }
  onSubmitMarks() {
    this.s.marks = this.test;
   this.traineeservice.update(this.s).subscribe((data) => {
     console.log('Updated...');
   });
    
  }
}
