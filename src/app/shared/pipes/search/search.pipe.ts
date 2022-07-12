import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(articles: any, searchText: string): any {

    if (!articles) return [];
    if (!searchText) return articles;

    return articles.filter(article => {
      return article['title'].toLowerCase().includes(searchText.toLowerCase());
    });

  }
}
