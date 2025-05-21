/**
 * Clickable US Map SVG
 *
 * This is a simple Angular application that displays a clickable US map using SVG.
 * When a state is clicked, a snackbar notification appears with the name of the state.
 * The map is created using SVG paths for each state, and the component handles click events
 * to show the snackbar.
 *
 * This is an updated version of angular4-us-map-svg
 * https://github.com/bharat20185/angular4-us-map-svg
 *
 */

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsMapComponent } from "./us-map/us-map.component";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  imports: [CommonModule, UsMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'US Map SVG';

  readonly snackBar = inject(MatSnackBar);

  usMapClick({ state } : { state: string }) {
    this.snackBar.open(`Clicked on ${state}`, 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['snackbar']
    });
  }
}
