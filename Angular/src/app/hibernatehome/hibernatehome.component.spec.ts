import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HibernatehomeComponent } from './hibernatehome.component';

describe('HibernatehomeComponent', () => {
  let component: HibernatehomeComponent;
  let fixture: ComponentFixture<HibernatehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HibernatehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HibernatehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
