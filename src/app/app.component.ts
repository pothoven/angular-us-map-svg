/**
 * Updated version of angular4-us-map-svg
 * https://github.com/bharat20185/angular4-us-map-svg
 *
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsMapComponent } from "./us-map/us-map.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, UsMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'us-map-svg';

  usMapClick($event: any) {
    console.log($event);
  }
}
