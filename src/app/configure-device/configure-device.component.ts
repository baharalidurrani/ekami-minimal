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

const DEVICE_ICON = `{'top':0,'left':0,'originX':'center','originY':'center','cornerStyle':'circle','opacity':2}`;
const DEVICE_TEXT = `{'fontSize':15,'originX':'center','originY':'center','top':25,'left':0}`;

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
  deviceName = '';
  deviceCategory = 'AC';
  constructor(
    public dialogRef: MatDialogRef<ConfigureDeviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ZoneType,
    private devicesQL: DevicesGQL
  ) {}

  ngOnInit() {
    console.log(
      '%cconfigure-device.component.ts line:17 onInit',
      'color: #007acc;'
    );
    this.dialogRef.updateSize('60%');
    this.devices$ = this.devicesQL.fetch();
    this.devicesSub = this.devices$.subscribe((r) => {
      this.devices = r.data.devices.filter((d) => !d.is_configured);
    });
  }

  submitDevice() {
    const data = {
      selected: this.selectedDevice,
      zoneID: this.data.id,
      deviceName: this.deviceName,
      deviceCategory: this.deviceCategory,
    };
    this.dialogRef.close(true);
  }
}
