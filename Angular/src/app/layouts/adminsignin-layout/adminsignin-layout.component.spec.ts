import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsigninLayoutComponent } from './adminsignin-layout.component';

describe('AdminsigninLayoutComponent', () => {
  let component: AdminsigninLayoutComponent;
  let fixture: ComponentFixture<AdminsigninLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsigninLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsigninLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
