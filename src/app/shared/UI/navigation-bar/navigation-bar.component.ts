import { Component, OnInit } from '@angular/core';
import {
  IonToolbar,
  IonBadge,
  IonTabBar,
  IonIcon,
  IonLabel,
  IonTabButton,
  IonButtons,
  IonTab,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, calendar, musicalNote } from 'ionicons/icons';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  imports: [
    IonTab,
    IonButtons,
    IonToolbar,
    IonBadge,
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
  ],
})
export class NavigationBarComponent implements OnInit {
  constructor() {
    addIcons({ heart, calendar, musicalNote });
  }

  ngOnInit() {}
}
