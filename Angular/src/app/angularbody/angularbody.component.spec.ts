import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularbodyComponent } from './angularbody.component';

describe('AngularbodyComponent', () => {
  let component: AngularbodyComponent;
  let fixture: ComponentFixture<AngularbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
