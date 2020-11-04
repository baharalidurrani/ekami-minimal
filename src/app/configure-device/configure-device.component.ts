import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ZoneType } from '../../generated/graphql';

@Component({
  selector: 'app-configure-device',
  templateUrl: './configure-device.component.html',
  styleUrls: ['./configure-device.component.css'],
})
export class ConfigureDeviceComponent implements OnInit {
  list = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 30 },
    { name: 'Joe', age: 40 },
  ];
  selected;
  constructor(
    public dialogRef: MatDialogRef<ConfigureDeviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ZoneType // private myControl: FormControl
  ) {}

  ngOnInit() {
    console.log(
      '%cconfigure-device.component.ts line:17 onInit',
      'color: #007acc;',
      this.data
    );
  }

  onNoClick() {
    this.dialogRef.close();
  }

  submitDevice() {
    console.log(
      '%cconfigure-device.component.ts line:21 submit',
      'color: #007acc;'
    );
    this.dialogRef.close({ selected: this.selected, zoneID: this.data.id });
  }
}
