import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayconfirmLayoutComponent } from './payconfirm-layout.component';

describe('PayconfirmLayoutComponent', () => {
  let component: PayconfirmLayoutComponent;
  let fixture: ComponentFixture<PayconfirmLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayconfirmLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayconfirmLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
