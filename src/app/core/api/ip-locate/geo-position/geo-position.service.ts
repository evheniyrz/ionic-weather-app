import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GEO_LOCATION_HOST } from '../../api-token/api-token-list';
import { IIpLocateResponse } from '../../models';
import { IpLocateService } from '../ip-locate.service';

@Injectable({
  providedIn: 'root',
})
export class GeoPositionService extends IpLocateService<IIpLocateResponse> {
  constructor(@Inject(GEO_LOCATION_HOST) dataHost: string) {
    super(dataHost, '/geo');
  }

  getLocation(): Observable<IIpLocateResponse> {
    return this.getGeoPosition();
  }
}
