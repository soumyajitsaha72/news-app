import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/shared/article';
import { SelectedNewsArticle } from 'src/app/shared/services/selected-new-article.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() element: Article;

  constructor(private selectedNewsArticleService: SelectedNewsArticle) { }

  ngOnInit(): void {
  }

  onClickReadMore(article: Article) {
    this.selectedNewsArticleService.toggleSelected.emit(true);
    this.selectedNewsArticleService.addNewsArticleSelected(article);
  }

}
