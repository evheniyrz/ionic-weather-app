import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootApiService } from '../root-api.service';
import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IpLocateService<T> extends RootApiService {
  constructor(
    @Inject(String) apiHost: string,
    @Inject(String) endpoint: string
  ) {
    super(apiHost, endpoint);
  }

  protected getGeoPosition(): Observable<T> {
    const params = this.generateGetRequestParams({
      fields: 'country,city,city_geoname_id,region,country_code',
    });
    const requestOption: HttpRequest<unknown> = new HttpRequest('GET', '', {
      // params,
      withCredentials: true,
      responseType: 'json',
      observe: 'body',
      reportProgress: false,
    });

    return this.apiRequest<T>(requestOption);
  }
}
