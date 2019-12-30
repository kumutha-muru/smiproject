import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Studentpersonaldetails } from '../../models/issue';
import { TraineeserviceService } from '../../traineeservice.service';
import { Router } from '@angular/router';
import { Amenities } from 'src/app/models/Amenities';
import { Studentdetails } from 'src/app/models/StudentDetails';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-freshers',
  templateUrl: './freshers.component.html',
  styleUrls: ['./freshers.component.css']
})
export class FreshersComponent implements OnInit {
  student: Studentdetails;
  studentpd: Studentpersonaldetails;
  ameneties: Amenities;
  student1: Studentdetails[];
  studentpd1: Studentpersonaldetails[];
  amenities1: Amenities[];
  result: string;
  gender: any;
  bond: boolean;
  salary: string;
  statusDetails: string;
  constructor(private router: Router, private traineeservice: TraineeserviceService, private fb: FormBuilder) {
    this.createForm();
  }
  onSubmit() {
    this.student.salary = this.salary;
    this.studentpd.gender = this.gender;
    this.student.bond = this.bond;
    this.traineeservice.saveamenities(this.ameneties).subscribe(result => this.result); console.log("connection status:" + this.ameneties);
    this.traineeservice.savestudentpd(this.studentpd).subscribe(result => this.result);
    this.traineeservice.savestudent(this.student).subscribe(result => this.result);
  }
  gotoadd() {
    this.router.navigate(['/views'])
  }
  ngOnInit() {
    this.studentpd = new Studentpersonaldetails();
    this.student = new Studentdetails();
    this.ameneties = new Amenities();
  }
  angForm: FormGroup;
  createForm() {
    this.angForm = this.fb.group({
      studentname: new FormControl('', Validators.required),
      studentemail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@"
          + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]{10}')
      ])),
      gender: new FormControl('', Validators.required),
      studentdoj: new FormControl('', Validators.required),
      bond: new FormControl('', Validators.required),
      studenttrainingd: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      stay: new FormControl('', Validators.required),
      studentcollege: new FormControl('', Validators.required),
      qualification: new FormControl('', Validators.required),
      studentyop: new FormControl('', Validators.required),
      mos: new FormControl('', Validators.required),
      stream: new FormControl('', Validators.required),
      studentaddress: new FormControl('', Validators.required),
      studentpmobile: new FormControl('', Validators.required),
      studentalternateno: new FormControl('', Validators.required),
      studentdob: new FormControl('', Validators.required),
    })
  }
}


