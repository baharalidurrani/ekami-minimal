import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import {
  DevicesGQL,
  DevicesQuery,
  DeviceType,
  RegisterNewClientsGQL,
} from '../../generated/graphql';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css'],
})
export class AvailableComponent implements OnInit, OnDestroy {
  devices$: Observable<ApolloQueryResult<DevicesQuery>>;
  devicesSub: Subscription;
  devices: DeviceType[];

  constructor(
    private devicesQL: DevicesGQL,
    private register: RegisterNewClientsGQL
  ) {}

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
  syncClients({ currentTarget }: { currentTarget: HTMLButtonElement }) {
    // currentTarget.disabled = true;
    // setTimeout(() => {
    //   currentTarget.disabled = false;
    // }, 2 * 1000);
    console.log(
      '%cavailable.component.ts line:15 syncClients',
      'color: #007acc;'
    );
    // TODO handel exception
    const regSub = this.register
      .mutate({}, { errorPolicy: 'ignore' })
      .subscribe((r) => {
        this.fetchDevices(true);
        regSub.unsubscribe();
      });
  }
  ngOnDestroy() {
    if (this.devicesSub) this.devicesSub.unsubscribe();
  }
}
