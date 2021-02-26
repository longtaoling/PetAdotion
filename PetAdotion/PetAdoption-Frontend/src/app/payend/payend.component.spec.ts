import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayendComponent } from './payend.component';

describe('PayendComponent', () => {
  let component: PayendComponent;
  let fixture: ComponentFixture<PayendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
