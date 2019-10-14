import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditPreplanComponent } from './create-edit-preplan.component';

describe('CreateEditPreplanComponent', () => {
  let component: CreateEditPreplanComponent;
  let fixture: ComponentFixture<CreateEditPreplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditPreplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditPreplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
