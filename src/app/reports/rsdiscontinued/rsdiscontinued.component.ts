import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Discontinued } from 'src/app/models/Deployed';

@Component({
  selector: 'app-rsdiscontinued',
  templateUrl: './rsdiscontinued.component.html',
  styleUrls: ['./rsdiscontinued.component.css']
})
export class RsdiscontinuedComponent implements OnInit {
  discontinue: Discontinued[];
  
  constructor(private router: Router, private traineeservice: TraineeserviceService) { }

  ngOnInit() {
    this.traineeservice.getdiscontinueddetails().subscribe(data => { this.discontinue = data;})
    
  }
}
