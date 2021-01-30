import { TestBed } from '@angular/core/testing';

import { AaheoService } from './aaheo.service';

describe('AaheoService', () => {
  let service: AaheoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AaheoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
