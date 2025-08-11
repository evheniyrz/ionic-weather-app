import { Component, signal, WritableSignal } from '@angular/core';
import { CapacitorGeolocationService } from '../core/api/capacitor-geolocation/capacitor-geolocation.service';
import { Position } from '@capacitor/geolocation';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [JsonPipe],
})
export class HomePage {
  positionValue: WritableSignal<Position | undefined> = signal(undefined);
  constructor(private locationService: CapacitorGeolocationService) {}

  ngOnInit(): void {
    this.locationService.getCurrentLocation().then((position: Position) => {
      this.positionValue.set(position);
    });
  }
}
