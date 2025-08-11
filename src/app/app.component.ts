import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonFooter,
  IonContent,
} from '@ionic/angular/standalone';
import { NavigationBarComponent } from './shared/UI/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonContent,
    IonFooter,
    IonApp,
    IonRouterOutlet,
    NavigationBarComponent,
  ],
})
export class AppComponent {
  constructor() {}
}
