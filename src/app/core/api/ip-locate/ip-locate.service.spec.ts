import { TestBed } from '@angular/core/testing';

import { IpLocateService } from './ip-locate.service';
import { IIpLocateResponse } from '../models';

describe('IpLookupService', () => {
  let service: IpLocateService<IIpLocateResponse>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpLocateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
