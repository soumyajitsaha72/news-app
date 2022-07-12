import { Injectable, EventEmitter } from "@angular/core";

@Injectable({ providedIn: "root" })
export class SelectedNewsArticle {
    newsArticleSelected: {};

    articleSelected = new EventEmitter<any>();
    toggleSelected = new EventEmitter<boolean>(false);

    addNewsArticleSelected(article) {
        this.newsArticleSelected = article;
        this.articleSelected.emit();
    }
}