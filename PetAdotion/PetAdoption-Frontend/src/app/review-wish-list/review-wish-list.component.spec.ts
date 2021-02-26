import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewWishListComponent } from './review-wish-list.component';

describe('ReviewWishListComponent', () => {
  let component: ReviewWishListComponent;
  let fixture: ComponentFixture<ReviewWishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewWishListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
