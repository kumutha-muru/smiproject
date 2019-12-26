import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Deployed } from 'src/app/models/Deployed';

@Component({
  selector: 'app-rsdeployed',
  templateUrl: './rsdeployed.component.html',
  styleUrls: ['./rsdeployed.component.css']
})
export class RsdeployedComponent implements OnInit {
  deploy: Deployed[];

  constructor(private router: Router, private traineeservice: TraineeserviceService) { }

  ngOnInit() {
    this.traineeservice.getdeployedstudentsdetails().subscribe(data => { this.deploy = data; })

  }

}
