import { Component, OnInit, ViewChild } from '@angular/core';
import { Issue } from 'src/app/models/issue';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-viewt',
  templateUrl: './viewt.component.html',
  styleUrls: ['./viewt.component.css']
})
export class ViewtComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;                                                                                                                                                                                                                                                                                                                                                                                                                                   
  trainer: Issue[];
 dataSource=new MatTableDataSource<Issue>(this.trainer);
  displayedColumns = ['Trainer Name', 'Qualification', 'Mobile No', 'Mail Id', 'Courses Taken'];
  constructor(private traineeservice: TraineeserviceService) {
  }
  p: Number = 1;
  count: Number = 10;

  ngOnInit() {
    this.traineeservice.gettrainer().subscribe(data => {
      this.trainer = data; console.log(this.trainer.length)
    });
   
  this.dataSource.paginator= this.paginator;
 
  }
}

