import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageimgComponent } from './homepageimg.component';

describe('HomepageimgComponent', () => {
  let component: HomepageimgComponent;
  let fixture: ComponentFixture<HomepageimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
