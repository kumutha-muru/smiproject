import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Issue } from 'src/app/models/issue';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addt',
  templateUrl: './addt.component.html',
  styleUrls: ['./addt.component.css']
})
export class AddtComponent implements OnInit {

  trainer: Issue;
  result: any;
  trainer1: Issue[];
  constructor(private router: Router, private traineeservice: TraineeserviceService,private fb: FormBuilder) {
    this.trainer = new Issue();
    this.createForm();
  }
  angForm: FormGroup;
  createForm() {
    this.angForm = this.fb.group({
      trainername: new FormControl('', Validators.required),
      quali: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]{10}')
      ])),
      mail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@"
          + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")
      ])),
      techtaken: new FormControl('', Validators.required),
      trainerpassword: new FormControl('', Validators.required),
    })
  }
  onSubmit() {
    this.traineeservice.savetrainer(this.trainer).subscribe(result => this.gotoadd());

  }
  gotoadd() {
    this.router.navigate(['/add'])
  }


  ngOnInit() { this.traineeservice.gettrainer().subscribe(data => { this.trainer1 = data; }); }
}
