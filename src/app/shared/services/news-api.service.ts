import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";
import { map } from "rxjs/operators";
import { Article } from "../article";

@Injectable({ providedIn: 'root' })
export class NewsApiService {
    newsArticles: Article[] = [];
    refreshNews = new EventEmitter<any>(); //when a menu item is clicked refresh the newArticles[].

    constructor(private http: HttpClient) { }

    fetchNewsArticles(type: string) {
        return this.http.get('https://inshorts.me/news/' + type + '?offset=0&limit=200')
            .pipe(map(
                (res) => {
                    return res['data']['articles'];
                }
            ))
    }
}