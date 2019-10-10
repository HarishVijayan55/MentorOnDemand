import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintechnologyLayoutComponent } from './admintechnology-layout.component';

describe('AdmintechnologyLayoutComponent', () => {
  let component: AdmintechnologyLayoutComponent;
  let fixture: ComponentFixture<AdmintechnologyLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintechnologyLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintechnologyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
