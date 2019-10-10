import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcompleteLayoutComponent } from './studentcomplete-layout.component';

describe('StudentcompleteLayoutComponent', () => {
  let component: StudentcompleteLayoutComponent;
  let fixture: ComponentFixture<StudentcompleteLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentcompleteLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcompleteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
