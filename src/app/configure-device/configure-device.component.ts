import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  DevicesGQL,
  DevicesQuery,
  DeviceType,
  ZoneType,
} from '../../generated/graphql';

@Component({
  selector: 'app-configure-device',
  templateUrl: './configure-device.component.html',
  styleUrls: ['./configure-device.component.css'],
})
export class ConfigureDeviceComponent implements OnInit {
  devices$: Observable<ApolloQueryResult<DevicesQuery>>;
  devicesSub: Subscription;
  devices: DeviceType[];
  selectedDevice: DeviceType;
  constructor(
    public dialogRef: MatDialogRef<ConfigureDeviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ZoneType,
    private devicesQL: DevicesGQL
  ) {}

  ngOnInit() {
    console.log(
      '%cconfigure-device.component.ts line:17 onInit',
      'color: #007acc;',
      this.data
    );
    this.devices$ = this.devicesQL.fetch();
    this.devicesSub = this.devices$.subscribe((r) => {
      this.devices = r.data.devices.filter((d) => !d.is_configured);
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  submitDevice() {
    console.log(
      '%cconfigure-device.component.ts line:21 submit',
      'color: #007acc;'
    );
    this.dialogRef.close({
      selected: this.selectedDevice,
      zoneID: this.data.id,
    });
  }
}
