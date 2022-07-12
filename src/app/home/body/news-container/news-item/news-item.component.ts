import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectedNewsArticle } from 'src/app/shared/services/selected-new-article.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() element: any;

  constructor(private selectedNewsArticleService: SelectedNewsArticle) { }

  ngOnInit(): void {
  }

  onClickReadMore(article) {
    // console.log(article);
    this.selectedNewsArticleService.toggleSelected.emit(true);
    this.selectedNewsArticleService.addNewsArticleSelected(article);
  }

}
