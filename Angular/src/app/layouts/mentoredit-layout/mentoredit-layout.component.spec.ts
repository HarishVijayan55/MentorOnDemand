import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoreditLayoutComponent } from './mentoredit-layout.component';

describe('MentoreditLayoutComponent', () => {
  let component: MentoreditLayoutComponent;
  let fixture: ComponentFixture<MentoreditLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentoreditLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoreditLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
