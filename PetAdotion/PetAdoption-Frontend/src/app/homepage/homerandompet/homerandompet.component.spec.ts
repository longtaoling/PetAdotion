import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerandompetComponent } from './homerandompet.component';

describe('HomerandompetComponent', () => {
  let component: HomerandompetComponent;
  let fixture: ComponentFixture<HomerandompetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomerandompetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomerandompetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
