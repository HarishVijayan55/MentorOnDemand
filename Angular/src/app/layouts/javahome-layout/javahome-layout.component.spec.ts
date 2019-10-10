import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavahomeLayoutComponent } from './javahome-layout.component';

describe('JavahomeLayoutComponent', () => {
  let component: JavahomeLayoutComponent;
  let fixture: ComponentFixture<JavahomeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavahomeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavahomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
