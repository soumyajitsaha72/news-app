import { Component, HostListener, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/shared/services/news-api.service';
import { SeachService } from 'src/app/shared/services/search.service';
import { SelectedNewsArticle } from 'src/app/shared/services/selected-new-article.service';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css']
})
export class NewsContainerComponent implements OnInit {
  newsArticles = [];
  searchText: string;

  constructor(private searchService: SeachService, private newsService: NewsApiService, private selectedNewsArticleService: SelectedNewsArticle) { }

  ngOnInit(): void {
    this.selectedNewsArticleService.toggleSelected.subscribe(value => this.isSelected = value)
    this.newsArticles = this.newsService.newsArticles;
    this.newsService.refreshNews.subscribe((res) => this.newsArticles = res)
    this.searchService.searchText.subscribe(res => this.searchText = res)
  }

  //For toggle and display news
  isSelected = false;

  //Infinite Scroll Feature
  end = 40;
  onScroll() {
    this.end = this.end + 40;
  }



  //This code is taken from w3Schools... It's responsible for backToTop button.
  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  showButton = false; // Button not visible a the top of the page.
  // When the user scrolls down 20px from the top of the document, show the button.
  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  backToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
