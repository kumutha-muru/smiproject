import { Component, OnInit } from '@angular/core';
import { Issue } from '../../models/issue';
import { TraineeserviceService } from 'src/app/traineeservice.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
  student: any[];
  constructor(private traineeservice: TraineeserviceService) {
  }

  ngOnInit() {
  
    
  }
}

