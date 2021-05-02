import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitArticleComponent } from './init-article.component';

describe('InitArticleComponent', () => {
  let component: InitArticleComponent;
  let fixture: ComponentFixture<InitArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
