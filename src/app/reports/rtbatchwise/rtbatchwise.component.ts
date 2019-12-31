import { Component, OnInit } from '@angular/core';
import { Batchatten, Batchtopic } from 'src/app/models/Deployed';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Issue } from 'src/app/models/issue';

@Component({
  selector: 'app-rtbatchwise',
  templateUrl: './rtbatchwise.component.html',
  styleUrls: ['./rtbatchwise.component.css']
})
export class RtbatchwiseComponent implements OnInit {
  sub1: Batchtopic;
  assign: Issue[];
  batchtopic: any[];
  add = new Array();
  t1: string[][];
  p:Number =1;
  count:Number =10;
  constructor(public traineeservice: TraineeserviceService) { }
  selected(value: string) {
    this.traineeservice.getbatchwisetopic(value).subscribe(data => {
      this.batchtopic = data;
      this.t1 = [];
      for (var i = 0; i <= this.batchtopic.length; i++) {
        this.t1[i] = [];
        this.add = this.batchtopic[i].split(",");
        console.log("add:" + this.add);
        for (var j = 0; j < this.add.length; j++) {
          var subs = this.add[j].split(",");
          this.t1[i][j] = subs;
        }
      }
    });
  }
  ngOnInit() {
    this.sub1 = new Batchtopic();
    this.traineeservice.getbatch().subscribe(data => { this.assign = data; console.log(this.assign) })
  }
}