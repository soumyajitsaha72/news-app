import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({providedIn:'root'})
export class NewsApiService {
    newsArticles = []

    constructor(private http: HttpClient) {}

    getNewsArticles(){
        return this.http.get('https://inshortsv2.vercel.app/news?type=all_news&limit=200')
        .pipe(map(
            (res) => {
                return res['articles'];
            }
        ))
    }
}