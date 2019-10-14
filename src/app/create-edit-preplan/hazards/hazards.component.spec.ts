import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardsComponent } from './hazards.component';

describe('HazardsComponent', () => {
  let component: HazardsComponent;
  let fixture: ComponentFixture<HazardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
