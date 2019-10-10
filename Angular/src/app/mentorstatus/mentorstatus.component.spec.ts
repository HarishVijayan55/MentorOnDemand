import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorstatusComponent } from './mentorstatus.component';

describe('MentorstatusComponent', () => {
  let component: MentorstatusComponent;
  let fixture: ComponentFixture<MentorstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
