import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleSelectedComponent } from './news-article-selected.component';

describe('NewsArticleSelectedComponent', () => {
  let component: NewsArticleSelectedComponent;
  let fixture: ComponentFixture<NewsArticleSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsArticleSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsArticleSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
