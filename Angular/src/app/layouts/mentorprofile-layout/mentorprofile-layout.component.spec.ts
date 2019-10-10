import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorprofileLayoutComponent } from './mentorprofile-layout.component';

describe('MentorprofileLayoutComponent', () => {
  let component: MentorprofileLayoutComponent;
  let fixture: ComponentFixture<MentorprofileLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorprofileLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorprofileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
