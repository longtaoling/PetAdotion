import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageindexComponent } from './homepageindex.component';

describe('HomepageindexComponent', () => {
  let component: HomepageindexComponent;
  let fixture: ComponentFixture<HomepageindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
