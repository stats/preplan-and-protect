import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreplanListComponent } from './preplan-list.component';

describe('PreplanListComponent', () => {
  let component: PreplanListComponent;
  let fixture: ComponentFixture<PreplanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreplanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreplanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
