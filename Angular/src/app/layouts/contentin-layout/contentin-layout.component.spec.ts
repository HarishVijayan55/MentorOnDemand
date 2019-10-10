import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentinLayoutComponent } from './contentin-layout.component';

describe('ContentinLayoutComponent', () => {
  let component: ContentinLayoutComponent;
  let fixture: ComponentFixture<ContentinLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentinLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentinLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
