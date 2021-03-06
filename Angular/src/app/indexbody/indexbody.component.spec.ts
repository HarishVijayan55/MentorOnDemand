import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexbodyComponent } from './indexbody.component';

describe('IndexbodyComponent', () => {
  let component: IndexbodyComponent;
  let fixture: ComponentFixture<IndexbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
