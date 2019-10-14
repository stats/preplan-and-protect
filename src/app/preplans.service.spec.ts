import { TestBed } from '@angular/core/testing';

import { PreplansService } from './preplans.service';

describe('PreplansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreplansService = TestBed.get(PreplansService);
    expect(service).toBeTruthy();
  });
});
