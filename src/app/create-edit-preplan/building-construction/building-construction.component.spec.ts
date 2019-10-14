import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingConstructionComponent } from './building-construction.component';

describe('BuildingConstructionComponent', () => {
  let component: BuildingConstructionComponent;
  let fixture: ComponentFixture<BuildingConstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingConstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
