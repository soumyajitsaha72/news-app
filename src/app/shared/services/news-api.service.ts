import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class NewsApiService {
    newsArticles = [];
    refreshNews = new EventEmitter<any>(); //when a menu item is clicked refresh the newArticles[].

    constructor(private http: HttpClient) { }

    fetchNewsArticles(type: string) {
        return this.http.get('https://inshortsv2.vercel.app/news?type=' + type + '&limit=200')
            .pipe(map(
                (res) => {
                    return res['articles'];
                }
            ))
    }
}