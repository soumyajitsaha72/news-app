import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() element
  
  constructor() { }

  ngOnInit(): void {
  }


  // WORK
  onClickReadMore(article){
    console.log(article);
  }

}
