import { TestBed } from '@angular/core/testing';

import { CopyRightService } from './copy-right.service';

describe('CopyRightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CopyRightService = TestBed.get(CopyRightService);
    expect(service).toBeTruthy();
  });
});
