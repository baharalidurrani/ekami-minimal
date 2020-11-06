import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-floor',
  templateUrl: './add-floor.component.html',
  styleUrls: ['./add-floor.component.css'],
})
export class AddFloorComponent implements OnInit {
  floorName: string;
  constructor(
    public dialogRef: MatDialogRef<AddFloorComponent>,
    @Inject(MAT_DIALOG_DATA) public siteID: string
  ) {}

  ngOnInit(): void {
    console.log('%cadd-floor.component.ts line:16 ngOnInit', 'color: #007acc;');
    this.dialogRef.updateSize('60%');
  }
  submitFloor() {
    console.log('submitFloor()', this.floorName);
  }
}
