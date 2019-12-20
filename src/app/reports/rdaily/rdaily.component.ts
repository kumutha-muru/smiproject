import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Dailyatten } from 'src/app/models/Deployed';

@Component({
  selector: 'app-rdaily',
  templateUrl: './rdaily.component.html',
  styleUrls: ['./rdaily.component.css']
})
export class RdailyComponent implements OnInit {
   today = new Date();
  date = this.today.getDate()+'-'+(this.today.getMonth()+1)+'-'+this.today.getFullYear();
  time = this.today.getHours() + ":" + this.today.getMinutes();
  todayatten:Dailyatten[];
  constructor(public traineeservice: TraineeserviceService)  { }
  Selected(value: string) {
    this.traineeservice.getDailyattendance(value).subscribe(data => {
      this.todayatten = data;
      console.log(this.todayatten)
    });
  }

  ngOnInit() {
    

  }
}
