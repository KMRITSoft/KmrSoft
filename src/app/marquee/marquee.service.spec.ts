import { TestBed } from '@angular/core/testing';

import { MarqueeService } from './marquee.service';

describe('MarqueeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarqueeService = TestBed.get(MarqueeService);
    expect(service).toBeTruthy();
  });
});
