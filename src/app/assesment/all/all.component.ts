import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Assessment } from 'src/app/models/issue';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
all:Assessment[];
  assigntest1: Assessment[];
  p:Number = 1;
  count:Number = 10;
  constructor(private router: Router, public traineeservice: TraineeserviceService) {}

  ngOnInit() {
    this.traineeservice.getDetails().subscribe(data =>{ 
      this.all = data;
      console.log(this.all)
     })
 }
 onSubmitmark(a: string) {
  this.traineeservice.a=a;
  console.log(a)
  this.traineeservice.update2(a).subscribe(data => {
    this.assigntest1 = data; console.log(this.assigntest1)
  })

 }
}
