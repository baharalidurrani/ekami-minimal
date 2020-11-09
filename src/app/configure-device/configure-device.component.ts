import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { ApolloQueryResult, FetchResult } from '@apollo/client/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  AddConfigureDeviceGQL,
  AddConfigureDeviceMutation,
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
export class ConfigureDeviceComponent implements OnInit, OnDestroy {
  devices$: Observable<ApolloQueryResult<DevicesQuery>>;
  devicesSub: Subscription;
  devices: DeviceType[];
  deviceForm: FormGroup;
  addDevice$: Observable<FetchResult<AddConfigureDeviceMutation>>;
  addDeviceSub: Subscription;

  constructor(
    public dialogRef: MatDialogRef<ConfigureDeviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ZoneType,
    private devicesQL: DevicesGQL,
    private addDevice: AddConfigureDeviceGQL,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.deviceForm = this.formBuilder.group({
      deviceName: new FormControl('', Validators.required),
      configuredIcon: new FormControl('AC', Validators.required),
      selectedDevice: new FormControl('', Validators.required),
    });
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
    this.addDevice$ = this.addDevice.mutate({
      zoneID: this.data.id,
      device: {
        mac: this.deviceForm.value.selectedDevice.mac,
        deviceIcon: DEVICE_ICON,
        deviceText: DEVICE_TEXT,
        configuredIcon: this.deviceForm.value.configuredIcon,
        name: this.deviceForm.value.deviceName,
      },
    });
    this.addDeviceSub = this.addDevice$.subscribe((r) => {
      if (r.data.addConfigureDevice) this.dialogRef.close(true);
      else this.dialogRef.close(false);
    });
  }
  ngOnDestroy() {
    if (this.devicesSub) this.devicesSub.unsubscribe();
    if (this.addDeviceSub) this.addDeviceSub.unsubscribe();
  }
}
