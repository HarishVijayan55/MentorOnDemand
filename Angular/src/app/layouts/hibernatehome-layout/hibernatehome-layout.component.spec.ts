import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HibernatehomeLayoutComponent } from './hibernatehome-layout.component';

describe('HibernatehomeLayoutComponent', () => {
  let component: HibernatehomeLayoutComponent;
  let fixture: ComponentFixture<HibernatehomeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HibernatehomeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HibernatehomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
