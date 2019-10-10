import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsigninLayoutComponent } from './mentorsignin-layout.component';

describe('MentorsigninLayoutComponent', () => {
  let component: MentorsigninLayoutComponent;
  let fixture: ComponentFixture<MentorsigninLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorsigninLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsigninLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
