import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewApplymentComponent } from './review-applyment.component';

describe('ReviewApplymentComponent', () => {
  let component: ReviewApplymentComponent;
  let fixture: ComponentFixture<ReviewApplymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewApplymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewApplymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
