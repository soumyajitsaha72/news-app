import { Component, OnInit } from '@angular/core';
import { Article } from './shared/article';
import { NewsApiService } from './shared/services/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private newsService: NewsApiService) { }

  ngOnInit() {
    this.newsService.fetchNewsArticles('all')
      .subscribe(
        (articles) => {
          for (let article of articles) {
            this.newsService.newsArticles.push(new Article(article.title, article.content, article.imageUrl));
          }
        }
      )
  }
}
