import {
  HttpClient,
  HttpErrorResponse,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { catchError, map, Observable, of } from 'rxjs';
import { RootApiService } from '../root-api.service';
// import {TodayWeatherResponse} from './types/today-weather-response';

@Injectable()
export class ForecastApiService<T> extends RootApiService {
  constructor(
    @Inject(String) apiHost: string,
    @Inject(String) endpoint: string
  ) {
    super(apiHost, endpoint);
  }
  // *****************************************

  // Call weather forecast for 5 days 3hrs range
  // api.openweathermap.org/data/2.5/forecast?q=Mykolayiv,ua
  //   q-	required	City name, state code and country code divided by comma, Please refer to ISO 3166 for the state codes or country codes.
  // You can specify the parameter not only in English. In this case, the API response should be returned in the same language as the language of requested location name if the location is in our predefined list of more than 200,000 locations.
  // cnt-	optional	A number of days, which will be returned in the API response (from 1 to 16). Learn more
  // appid-	required	Your unique API key (you can always find it on your account page under the "API key" tab)
  // mode-	optional	Response format. Possible values are xml and html. If you don't use the mode parameter format is JSON by default. Learn more
  // units-	optional	Units of measurement. 'standard', 'metric' and 'imperial' units are available. If you do not use the units parameter, standard units will be applied by default. Learn more
  // lang-	optional	You can use this parameter to get the output in your language. Learn more

  protected weatherGet(
    cityName = 'Mykolayiv',
    countryCode = 'ua'
  ): Observable<T> {
    const params = this.generateGetRequestParams({
      q: `${cityName},${countryCode}`,
      units: 'metric',
    });
    const requestOption: HttpRequest<unknown> = new HttpRequest('GET', '', {
      params,
      withCredentials: true,
      responseType: 'json',
      observe: 'body',
      reportProgress: false,
    });
    return this.apiRequest<T>(requestOption).pipe(
      catchError((error: HttpErrorResponse) => {
        return of({
          code: error ?? ['cod'],
          message: error.message,
        } as T);
      })
    );
  }
}

const q = {
  method: 'string',
  url: 'string',
  options: {
    body: 'any;',
    headers: 'HttpHeaders',
    context: 'HttpContext',
    observe: 'body',
    params: 'HttpParams',
    reportProgress: false,
    responseType: 'json',
    withCredentials: true,
    transferCache: {
      includeHeaders: 'string[];',
    },
  },
};
