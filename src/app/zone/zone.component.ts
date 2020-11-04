import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  DeviceType,
  ZoneGQL,
  ZoneQuery,
  ZoneType,
} from '../../generated/graphql';
import { ConfigureDeviceComponent } from '../configure-device/configure-device.component';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
})
export class ZoneComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private zoneQL: ZoneGQL,
    private dialog: MatDialog
  ) {}

  @Input() zone: ZoneType;
  zoneSub: Subscription;
  zone$: Observable<ApolloQueryResult<ZoneQuery>>;
  selectedDevice: DeviceType;

  ngOnInit(): void {
    console.log(
      '%czone.component.ts line:20 onInit',
      'color: white; background-color: #26bfa5;'
    );
    if (!this.zone) {
      const id = this.route.snapshot.params['id'];
      this.zone$ = this.zoneQL.fetch({ id });
      this.zoneSub = this.zone$.subscribe((f) => {
        this.zone = f.data.zone;
      });
    }
  }

  expandDevice(device: DeviceType) {
    if (this.selectedDevice) this.selectedDevice = null;
    else this.selectedDevice = device;
  }

  addDevice(e) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.zone;

    const dialogRef = this.dialog.open(ConfigureDeviceComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.selected)
        console.log(
          '%czone.component.ts line:67 result',
          'color: #007acc;',
          result
        );
    });
  }

  ngOnDestroy() {
    if (this.zoneSub) this.zoneSub.unsubscribe();
  }
}
