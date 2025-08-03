import { Inject, Injectable } from '@angular/core';
import { ForecastApiService } from '../forecast-api.service';
import { Observable } from 'rxjs';
import { OPEN_WEATHER_API_HOST } from '../../api-token/api-token-list';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService extends ForecastApiService<any> {
  constructor(@Inject(OPEN_WEATHER_API_HOST) forecastHost: string) {
    super(forecastHost, '/forecast');
  }

  fifeDaysForecastData(geo: any): Observable<any> {
    return this.weatherGet(geo.city, geo.country_code);
  }
}
