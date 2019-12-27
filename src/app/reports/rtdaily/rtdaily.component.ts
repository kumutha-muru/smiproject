import { Component, OnInit } from '@angular/core';
import { Dailytopic } from 'src/app/models/Deployed';
import { TraineeserviceService } from 'src/app/traineeservice.service';

@Component({
  selector: 'app-rtdaily',
  templateUrl: './rtdaily.component.html',
  styleUrls: ['./rtdaily.component.css']
})
export class RtdailyComponent implements OnInit {
  today = new Date();
  date = this.today.getDate() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getFullYear();
  dailytopic: any[];
  add = new Array();
  constructor(public traineeservice: TraineeserviceService) { }
  Selected(value: string) {
    this.traineeservice.getDailytopic(value).subscribe(data => {
      this.dailytopic = data;
      console.log("abc:" + this.dailytopic)
      this.add = this.dailytopic[0].split(",");
    });
  }
  ngOnInit() {
  }

}