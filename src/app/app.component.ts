import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smiattendance';
  public tt:boolean;
  constructor(){
    this.tt=window.location.pathname.includes('login') || window.location.pathname==='/';
  }
}
