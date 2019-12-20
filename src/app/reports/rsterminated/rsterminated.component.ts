import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Terminated } from 'src/app/models/Deployed';

@Component({
  selector: 'app-rsterminated',
  templateUrl: './rsterminated.component.html',
  styleUrls: ['./rsterminated.component.css']
})
export class RsterminatedComponent implements OnInit {
terminate: Terminated[];
  
constructor(private router: Router, private traineeservice: TraineeserviceService) { }

ngOnInit() {
  this.traineeservice.getterminateddetails().subscribe(data => { this.terminate = data; console.log(this.terminate) })
  
}}
