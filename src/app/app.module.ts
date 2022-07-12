import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { BodyComponent } from './home/body/body.component';
import { FooterComponent } from './home/footer/footer.component';
import { MenuComponent } from './home/body/menu/menu.component';
import { NewsContainerComponent } from './home/body/news-container/news-container.component';
import { NewsItemComponent } from './home/body/news-container/news-item/news-item.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NewsArticleSelectedComponent } from './home/body/news-container/news-article-selected/news-article-selected.component';
import { SearchPipe } from './shared/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent,
    NewsContainerComponent,
    NewsItemComponent,
    NewsArticleSelectedComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
