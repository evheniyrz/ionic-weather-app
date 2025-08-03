import { TestBed } from '@angular/core/testing';

import { CapacitorGeolocationService } from './capacitor-geolocation.service';

describe('CapacitorGeolocationService', () => {
  let service: CapacitorGeolocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapacitorGeolocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
