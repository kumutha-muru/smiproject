import { Component, OnInit } from '@angular/core';
import { Studentdetails } from 'src/app/models/StudentDetails';
import { Router } from '@angular/router';
import { Issue } from 'src/app/models/issue';
import { TraineeserviceService } from 'src/app/traineeservice.service';

@Component({
  selector: 'app-batchupdation',
  templateUrl: './batchupdation.component.html',
  styleUrls: ['./batchupdation.component.css']
})
export class BatchupdationComponent implements OnInit {
  assign: Issue[];
  bat: Studentdetails;
  getassign: Studentdetails[];
  onOptionsSelected(value: string) {
    this.traineeservice.getassigned(value).subscribe(data => {
      this.getassign = data;
    });
  }
  constructor(private router: Router, public traineeservice: TraineeserviceService) { }
  ngOnInit() {
    this.bat = new Studentdetails();
    this.traineeservice.getbatch().subscribe(data => { this.assign = data; })
  }
  onSubmit() {
    this.traineeservice.savebatupdate(this.bat).subscribe(data => { this.bat = data; })
  }
}
