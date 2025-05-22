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
import { MatDialog } from '@angular/material/dialog';
import { UsMapComponent } from "./us-map/us-map.component";
import { StateDialogComponent } from './state-dialog/state-dialog.component';
import statesHash from '@assets/states-hash.json';

@Component({
  selector: 'app-root',
  imports: [CommonModule, UsMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'US Map SVG';

  readonly dialog = inject(MatDialog);

  /**
   * usMapClick - do whatever desired when a state is clicked.
   * In this case, we open a dialog with the state name and some example data.
   *
   * @param event: { state: string } - The event emitted from the map component.
   */
  usMapClick({ state }: { state: keyof typeof statesHash }) {
    const dialogRef = this.dialog.open(StateDialogComponent, {
      width: '90vw',
      data: {
        state,
        name: statesHash[state],
        stateData: `Data for ${statesHash[state]} goes here` } // Example data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Handle the result from the dialog
    });
  }
}
