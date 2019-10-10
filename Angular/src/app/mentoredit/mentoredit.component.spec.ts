import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoreditComponent } from './mentoredit.component';

describe('MentoreditComponent', () => {
  let component: MentoreditComponent;
  let fixture: ComponentFixture<MentoreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentoreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
