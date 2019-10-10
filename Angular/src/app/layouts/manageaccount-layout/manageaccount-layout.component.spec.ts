import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageaccountLayoutComponent } from './manageaccount-layout.component';

describe('ManageaccountLayoutComponent', () => {
  let component: ManageaccountLayoutComponent;
  let fixture: ComponentFixture<ManageaccountLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageaccountLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageaccountLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
