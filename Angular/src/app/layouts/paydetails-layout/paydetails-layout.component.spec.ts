import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydetailsLayoutComponent } from './paydetails-layout.component';

describe('PaydetailsLayoutComponent', () => {
  let component: PaydetailsLayoutComponent;
  let fixture: ComponentFixture<PaydetailsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaydetailsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaydetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
