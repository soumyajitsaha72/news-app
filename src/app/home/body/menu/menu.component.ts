import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems = ['all_news',
  'trending',
  'top_stories',
  'national',
  'business',
  'politics',
  'sports',
  'technology',
  'startups',
  'entertainment',
  'education',
  'world',
  'automobile',
  'science',
  'travel',
  'miscellaneous',
  'fashion']

  constructor() { }

  ngOnInit(): void {
  }

}
