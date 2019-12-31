import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewb',
  templateUrl: './viewb.component.html',
  styleUrls: ['./viewb.component.css']
})
export class ViewbComponent implements OnInit {
  p: Number = 1;
  count: Number = 10;
  constructor() { }

  ngOnInit() {
  }

}
