import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavahomeComponent } from './javahome.component';

describe('JavahomeComponent', () => {
  let component: JavahomeComponent;
  let fixture: ComponentFixture<JavahomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavahomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
