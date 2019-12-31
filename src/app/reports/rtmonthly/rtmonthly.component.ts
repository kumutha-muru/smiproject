import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Monthlytopic } from 'src/app/models/Deployed';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-rtmonthly',
  templateUrl: './rtmonthly.component.html',
  styleUrls: ['./rtmonthly.component.css']
})
export class RtmonthlyComponent implements OnInit {

  @ViewChild("month", { static: false }) month: ElementRef;
  monthly: any[];
  add = new Array();
  t1: string[][];
  p:Number = 1;
  count:Number =10;
  constructor(public traineeservice: TraineeserviceService) { }
  generate1(value: string) {
    this.traineeservice.getMonthlytopic(value).subscribe(data => {
      this.monthly = data;
      this.t1 = [];
      for (var i = 0; i <= this.monthly.length; i++) {
        this.t1[i] = [];
        this.add = this.monthly[i].split(',');
        console.log("add:" + this.add);
        for (var j = 0; j < this.add.length; j++) {
          var sub1 = this.add[j].split(",");
          this.t1[i][j] = sub1;
        }
      }
    });
  }
  ngOnInit() {
  }

}