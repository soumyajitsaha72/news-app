import { Component, OnInit } from '@angular/core';
import { SeachService } from 'src/app/shared/services/search.service';
import { SelectedNewsArticle } from 'src/app/shared/services/selected-new-article.service';

@Component({
  selector: 'app-news-article-selected',
  templateUrl: './news-article-selected.component.html',
  styleUrls: ['./news-article-selected.component.css']
})
export class NewsArticleSelectedComponent implements OnInit {
  article: any;

  constructor(private selectedNewsArticleService: SelectedNewsArticle, private searchService: SeachService) { }

  ngOnInit(): void {
    this.article = this.selectedNewsArticleService.newsArticleSelected;
  }

  closeButtonClicked() {
    this.selectedNewsArticleService.toggleSelected.emit(false);
    this.searchService.searchText.emit("");
  }


}
