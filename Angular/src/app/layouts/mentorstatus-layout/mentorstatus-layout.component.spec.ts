import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorstatusLayoutComponent } from './mentorstatus-layout.component';

describe('MentorstatusLayoutComponent', () => {
  let component: MentorstatusLayoutComponent;
  let fixture: ComponentFixture<MentorstatusLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorstatusLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorstatusLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
