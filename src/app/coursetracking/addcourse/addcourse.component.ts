import { Component, OnInit } from '@angular/core';
import { TraineeserviceService } from '../../traineeservice.service';
import { Router, } from '@angular/router';
import { Issue } from '../../models/issue';


@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course: Issue;
  result: any;
  course1: Issue[];
  result1: boolean;
  constructor(private router: Router, private traineeservice: TraineeserviceService) {
    this.course = new Issue();
  }
  onSubmit() {
    this.traineeservice.save(this.course).subscribe(data => {this.course =data; console.log("connection status:"+this.course)});
  }
  gotoadd() {
    this.router.navigate(['../coursetracking/add'])
  }
  ngOnInit() { this.traineeservice.getCourseDetails().subscribe(data => { this.course1 = data; }); }
}