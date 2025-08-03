import { Injectable } from '@angular/core';

import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class CapacitorGeolocationService {
  constructor() {}

  async getCurrentLocation() {
    const permission = await Geolocation.requestPermissions();
    if (permission.location === 'denied') {
      throw new Error('Нет доступа к геолокации');
    }

    const coords = await Geolocation.getCurrentPosition();
  }
}
