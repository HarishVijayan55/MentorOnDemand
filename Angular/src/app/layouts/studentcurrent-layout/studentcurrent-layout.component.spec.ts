import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcurrentLayoutComponent } from './studentcurrent-layout.component';

describe('StudentcurrentLayoutComponent', () => {
  let component: StudentcurrentLayoutComponent;
  let fixture: ComponentFixture<StudentcurrentLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentcurrentLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcurrentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
