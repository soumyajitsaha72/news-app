import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/shared/services/news-api.service';

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

  constructor(private newsService: NewsApiService) { }

  ngOnInit(): void {
  }

  onClickMenuItem(item: string) {
    this.newsService.fetchNewsArticles(item)
      .subscribe(
        (articles) => {
          let newArr = []
          for (let article of articles) {
            newArr.push(article)
          }
          this.newsService.newsArticles = newArr;
          this.newsService.refreshNews.emit(this.newsService.newsArticles)
        }
      )
  }

}
