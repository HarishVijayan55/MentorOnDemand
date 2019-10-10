import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentindexLayoutComponent } from './studentindex-layout.component';

describe('StudentindexLayoutComponent', () => {
  let component: StudentindexLayoutComponent;
  let fixture: ComponentFixture<StudentindexLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentindexLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentindexLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
