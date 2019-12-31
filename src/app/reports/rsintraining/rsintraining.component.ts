import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Intraining } from 'src/app/models/Deployed';

@Component({
  selector: 'app-rsintraining',
  templateUrl: './rsintraining.component.html',
  styleUrls: ['./rsintraining.component.css']
})
export class RsintrainingComponent implements OnInit {

  intrain: Intraining[];
  p:Number =1;
  count:Number =10;
  constructor(private router: Router, private traineeservice: TraineeserviceService) { }

  ngOnInit() {
    this.traineeservice.getdiscontinueddetails().subscribe(data => { this.intrain = data;})
    
  }
}
