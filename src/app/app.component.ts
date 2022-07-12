import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './shared/services/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private newsService: NewsApiService) { }

  ngOnInit() {
    this.newsService.fetchNewsArticles('all_news')
      .subscribe(
        (articles) => {
          for (let article of articles) {
            this.newsService.newsArticles.push(article);
          }
        }
      )
  }
}
