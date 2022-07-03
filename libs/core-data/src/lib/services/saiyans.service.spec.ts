import { TestBed } from '@angular/core/testing';

import { SaiyansService } from './saiyans.service';

describe('SaiyansService', () => {
  let service: SaiyansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaiyansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
