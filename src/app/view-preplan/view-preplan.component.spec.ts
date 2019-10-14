import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPreplanComponent } from './view-preplan.component';

describe('ViewPreplanComponent', () => {
  let component: ViewPreplanComponent;
  let fixture: ComponentFixture<ViewPreplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPreplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPreplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
