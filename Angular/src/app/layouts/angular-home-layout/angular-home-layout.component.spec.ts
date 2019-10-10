import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHomeLayoutComponent } from './angular-home-layout.component';

describe('AngularHomeLayoutComponent', () => {
  let component: AngularHomeLayoutComponent;
  let fixture: ComponentFixture<AngularHomeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularHomeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
