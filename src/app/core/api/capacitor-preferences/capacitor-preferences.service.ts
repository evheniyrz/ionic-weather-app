import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { ILocation, PreferencesKnownKeys } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CapacitorPreferencesService {
  async setPref<K extends PreferencesKnownKeys>(
    key: K,
    value: Record<string, unknown>
  ): Promise<void> {
    const savedValue: string = JSON.stringify(value);

    await Preferences.set({ key, value: savedValue });
  }

  async getPref<K extends PreferencesKnownKeys>(
    key: K
  ): Promise<string | null> {
    const { value } = await Preferences.get({ key });

    return value;
  }
}
