import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  date = {}
  dayArr = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
  monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor() { }

  ngOnInit(): void {
    this.date = {
      'day': new Date().getDay(),
      'date': new Date().getDate(),
      'month': new Date().getMonth(),
      'year': new Date().getFullYear()
    }
  }

}
