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
  BrokerDeviceType,
  BrokerUnregisteredClientsGQL,
  BrokerUnregisteredClientsQuery,
  ZoneType,
} from '../../generated/graphql';

const DEVICE_ICON = `{"top":0,"left":0,"originX":"center","originY":"center","cornerStyle":"circle","opacity":2}`;
const DEVICE_TEXT = `{"fontSize":15,"originX":"center","originY":"center","top":25,"left":0}`;
const DEVICE_GROUP = `{"top":null,"left":null,"originX":"center","originY":"center","height":20,"width":40,"scaleY":null,"scaleX":null,"hasControls":false,"chosedIcon":"AC","deviceName":"Device Group Name"}`;

@Component({
  selector: 'app-configure-device',
  templateUrl: './configure-device.component.html',
  styleUrls: ['./configure-device.component.css'],
})
export class ConfigureDeviceComponent implements OnInit, OnDestroy {
  unregistered$: Observable<ApolloQueryResult<BrokerUnregisteredClientsQuery>>;
  unregisteredSub: Subscription;
  clients: BrokerDeviceType[];
  deviceForm: FormGroup;
  addDevice$: Observable<FetchResult<AddConfigureDeviceMutation>>;
  addDeviceSub: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ZoneType,
    public dialogRef: MatDialogRef<ConfigureDeviceComponent>,
    private unregisteredQL: BrokerUnregisteredClientsGQL,
    private addDevice: AddConfigureDeviceGQL,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log(
      '%cconfigure-device.component.ts line:45 ngOnInit',
      'color: white; background-color: #007acc;'
    );
    this.dialogRef.updateSize('60%');
    this.deviceForm = this.formBuilder.group({
      deviceName: new FormControl('', Validators.required),
      configuredIcon: new FormControl('AC', Validators.required),
      selectedDevice: new FormControl('', Validators.required),
    });

    this.unregistered$ = this.unregisteredQL.fetch(
      {},
      { fetchPolicy: 'network-only' }
    );
    this.unregisteredSub = this.unregistered$.subscribe((r) => {
      this.clients = r.data.brokerUnregisteredClients;
    });
  }

  submitDevice() {
    this.addDevice$ = this.addDevice.mutate({
      zoneID: this.data.id,
      device: {
        mac: this.deviceForm.value.selectedDevice.mac,
        mqtt_topic: this.deviceForm.value.selectedDevice.topic,
        deviceIcon: DEVICE_ICON,
        deviceText: DEVICE_TEXT,
        deviceGroup: DEVICE_GROUP,
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
    if (this.unregisteredSub) this.unregisteredSub.unsubscribe();
    if (this.addDeviceSub) this.addDeviceSub.unsubscribe();
  }
}
