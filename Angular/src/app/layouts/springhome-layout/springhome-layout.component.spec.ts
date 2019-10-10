import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringhomeLayoutComponent } from './springhome-layout.component';

describe('SpringhomeLayoutComponent', () => {
  let component: SpringhomeLayoutComponent;
  let fixture: ComponentFixture<SpringhomeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringhomeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringhomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
