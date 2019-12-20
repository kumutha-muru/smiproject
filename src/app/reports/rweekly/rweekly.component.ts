import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Weeklyatten } from 'src/app/models/Deployed';

@Component({
  selector: 'app-rweekly',
  templateUrl: './rweekly.component.html',
  styleUrls: ['./rweekly.component.css']
})
export class RweeklyComponent implements OnInit {
  @ViewChild("fromdate",{static:false}) fromdate:ElementRef;
  @ViewChild("todate",{static:false}) todate:ElementRef;
fromatten:Weeklyatten[];
toatten:Weeklyatten[];
  constructor(public traineeservice: TraineeserviceService)  { }
  generate1(value: string) {
    this.traineeservice.getFromweekly(value).subscribe(data => {
      this.fromatten = data;
      console.log(this.fromatten)
      var from=this.fromdate.nativeElement.value;
    });
  }
  generate2(value: string) {
    this.traineeservice.getToweekly(value).subscribe(data => {
      this.toatten = data;
      console.log(this.toatten);
      var to=this.todate.nativeElement.value;
    });
  }
  ngOnInit() {
  }
  
}
