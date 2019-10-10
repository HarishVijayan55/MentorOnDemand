import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringhomeComponent } from './springhome.component';

describe('SpringhomeComponent', () => {
  let component: SpringhomeComponent;
  let fixture: ComponentFixture<SpringhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
