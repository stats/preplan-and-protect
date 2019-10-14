import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireFlowComponent } from './fire-flow.component';

describe('FireFlowComponent', () => {
  let component: FireFlowComponent;
  let fixture: ComponentFixture<FireFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
