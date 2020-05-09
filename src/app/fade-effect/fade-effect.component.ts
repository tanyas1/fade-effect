import { Component, OnInit } from '@angular/core';
import { FadeDialogComponent } from '../fade-dialog/fade-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-fade-effect',
  templateUrl: './fade-effect.component.html',
  styleUrls: ['./fade-effect.component.scss']
})
export class FadeEffectComponent implements OnInit {
showDiv: boolean;
hideDiv: boolean;
buttonText = 'Fade in';

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FadeDialogComponent, {
      width: '250px',
      panelClass: 'fade-in'
    }
    );
    // dialogRef.beforeClosed().subscribe(result => {
    // });
  }

  ngOnInit() {
    this.showDiv = true;
    this.openDialog();
  }

  // toggleState() {
  //   this.buttonText = (this.showDiv) ? 'Fade Out' : 'Fade In';
  //   console.log(this.showDiv);
  // }

  // onClose() {
  //   this.hideDiv = true;
  //   this.showDiv = false;
  // }



}
