import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Monthlytopic } from 'src/app/models/Deployed';

@Component({
  selector: 'app-rtmonthly',
  templateUrl: './rtmonthly.component.html',
  styleUrls: ['./rtmonthly.component.css']
})
export class RtmonthlyComponent implements OnInit {

  @ViewChild("month", { static: false }) month: ElementRef;
  monthly: Monthlytopic[];
  constructor(public traineeservice: TraineeserviceService) { }
  generate1(value: string) {
    this.traineeservice.getMonthlytopic(value).subscribe(data => {
      this.monthly = data;

      var fmonth = this.month.nativeElement.value;

    });
  }
  ngOnInit() {
  }

}
