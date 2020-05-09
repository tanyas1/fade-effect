import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-fade-dialog',
  templateUrl: './fade-dialog.component.html',
  styleUrls: ['./fade-dialog.component.scss']
})
export class FadeDialogComponent implements OnInit {

  hideDialog = false;

  constructor(
    public dialogRef: MatDialogRef<FadeDialogComponent>) {}

    ngOnInit() {
    }

    onClose() {
      this.hideDialog = true;
      // this.dialogRef.addPanelClass('fade-out');
      setTimeout(() => {
      this.dialogRef.close();
   }, 5000);
    }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
