import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/shared/services/news-api.service';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css']
})
export class NewsContainerComponent implements OnInit {
  newsArticles = [];

  isSelected = false;
  closeButtonClicked(){
    // this.isSelected = false;
  }

  // onScroll(){
  //   console.log("scrolled!");
  // }

  constructor(private newsService: NewsApiService) { }

  ngOnInit(): void {
    this.newsArticles = this.newsService.newsArticles;
  }

}
