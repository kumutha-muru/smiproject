import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Monthlyatten } from 'src/app/models/Deployed';

@Component({
  selector: 'app-rmonthly',
  templateUrl: './rmonthly.component.html',
  styleUrls: ['./rmonthly.component.css']
})
export class RmonthlyComponent implements OnInit {
  @ViewChild("month",{static:false}) month:ElementRef;
  monthly:Monthlyatten[];
    constructor(public traineeservice: TraineeserviceService)  { }
    generate1(value: string) {
      this.traineeservice.getMonth(value).subscribe(data => {
        this.monthly= data;
        console.log(this.monthly)
        var fmonth=this.month.nativeElement.value;
//        console.log(this.monthly[3][2])
      });
    }
  ngOnInit() {
  }
}
