import { Component, OnInit } from '@angular/core';
import { SeachService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  search: string;
  date = {}
  dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
  monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(private searchService: SeachService) { }

  ngOnInit(): void {
    this.date = {
      'day': new Date().getDay(),
      'date': new Date().getDate(),
      'month': new Date().getMonth(),
      'year': new Date().getFullYear()
    };
    this.searchService.searchText.subscribe(res => this.search = res);
  }

  onInput(searchText: string) {
    this.searchService.searchText.emit(searchText);
  }

}
