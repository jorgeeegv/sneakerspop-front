import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerEditComponent } from './sneaker-edit.component';

describe('SneakerEditComponent', () => {
  let component: SneakerEditComponent;
  let fixture: ComponentFixture<SneakerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
