import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import {
  OPEN_WEATHER_API_HOST,
  GEO_LOCATION_HOST,
  REST_COUNTRIES_API_HOST,
  REST_CITIES_API_HOST,
} from './app/core/api/api-token/api-token-list';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    {
      provide: OPEN_WEATHER_API_HOST,
      useValue: isDevMode()
        ? 'http://localhost:3000'
        : 'https://express-core-serv.onrender.com',
    },
    {
      provide: GEO_LOCATION_HOST,
      useValue: isDevMode()
        ? 'http://localhost:3000'
        : 'https://express-core-serv.onrender.com',
    },
    {
      provide: REST_COUNTRIES_API_HOST,
      useValue: isDevMode()
        ? 'http://localhost:3000'
        : 'https://express-core-serv.onrender.com',
    },
    {
      provide: REST_CITIES_API_HOST,
      useValue: isDevMode()
        ? 'http://localhost:3000'
        : 'https://express-core-serv.onrender.com',
    },
  ],
});
