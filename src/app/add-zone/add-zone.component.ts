import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddZoneToFloorGQL } from '../../generated/graphql';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.css'],
})
export class AddZoneComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddZoneComponent>,
    @Inject(MAT_DIALOG_DATA) public floorID: string,
    private addZoneQL: AddZoneToFloorGQL
  ) {}

  ngOnInit(): void {
    console.log(
      '%cadd-zone.component.ts line:18 ngOnInit',
      'color: #007acc;',
      this.floorID
    );
  }

  submitZone() {
    this.addZoneQL.mutate({ floorId: this.floorID, zone: {} });
  }
}
