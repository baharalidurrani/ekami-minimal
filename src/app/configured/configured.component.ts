import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import { DevicesGQL, DevicesQuery, DeviceType } from '../../generated/graphql';

@Component({
  selector: 'app-configured',
  templateUrl: './configured.component.html',
  styleUrls: ['./configured.component.css'],
})
export class ConfiguredComponent implements OnInit {
  devices$: Observable<ApolloQueryResult<DevicesQuery>>;
  devicesSub: Subscription;
  devices: DeviceType[];

  constructor(private devicesQL: DevicesGQL) {}

  ngOnInit(): void {
    console.log(
      '%cconfigured.component.ts line:19 ngOnInit',
      'color: white; background-color: #26bfa5;'
    );
    this.devices$ = this.devicesQL.fetch({}, { fetchPolicy: 'network-only' });
    this.devicesSub = this.devices$.subscribe((r) => {
      this.devices = r.data.devices;
    });
  }
  ngOnDestroy() {
    if (this.devicesSub) this.devicesSub.unsubscribe();
  }
}
