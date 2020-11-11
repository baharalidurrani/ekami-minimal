import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import { DevicesGQL, DevicesQuery, DeviceType } from '../../generated/graphql';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css'],
})
export class AvailableComponent implements OnInit, OnDestroy {
  devices$: Observable<ApolloQueryResult<DevicesQuery>>;
  devicesSub: Subscription;
  devices: DeviceType[];

  constructor(private devicesQL: DevicesGQL) {}

  ngOnInit(): void {
    console.log(
      '%cavailable.component.ts line:19 ngOnInit',
      'color: white; background-color: #26bfa5;'
    );
    this.fetchDevices(false);
  }
  fetchDevices(refresh: boolean) {
    if (this.devicesSub) this.devicesSub.unsubscribe();
    refresh
      ? (this.devices$ = this.devicesQL.fetch(
          {},
          { fetchPolicy: 'network-only' }
        ))
      : (this.devices$ = this.devicesQL.fetch());
    this.devicesSub = this.devices$.subscribe((r) => {
      this.devices = r.data.devices.filter((d) => !d.is_configured);
    });
  }

  ngOnDestroy() {
    if (this.devicesSub) this.devicesSub.unsubscribe();
  }
}
