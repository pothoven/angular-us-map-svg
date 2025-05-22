import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import statesHash from '@assets/states-hash.json';

@Component({
  selector: 'app-state-dialog',
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './state-dialog.component.html',
  styleUrl: './state-dialog.component.scss'
})
export class StateDialogComponent {
  name: string;
  iframeUrl: SafeResourceUrl;

  constructor(
    public dialogRef: MatDialogRef<StateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { state: keyof typeof statesHash },
    private sanitizer: DomSanitizer
  ) {
    // convert the states abbreviation to the full name
    // e.g. 'CA' to 'California'
    this.name = statesHash[data.state];

    // for demonstation purposes, we're just showing the state's
    // Wikipedia page in an iframe for the dialog content.
    const wikipediaUrl = `https://en.wikipedia.org/wiki/${this.name}`;
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(wikipediaUrl);
   }

  closeDialog(result?: any) {
    this.dialogRef.close(result);
  }

}
