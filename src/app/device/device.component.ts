import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import { DeviceGQL, DeviceQuery, DeviceType } from '../../generated/graphql';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
})
export class DeviceComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private deviceQL: DeviceGQL) {}
  deviceQLSub: Subscription;
  device: DeviceType;
  deviceQL$: Observable<ApolloQueryResult<DeviceQuery>>;
  ngOnInit(): void {
    const mac: string = this.route.snapshot.params['mac'];
    console.log('%cdevice.component.ts line:19 mac', 'color: #007acc;', mac);
    this.deviceQL$ = this.deviceQL.fetch({ mac }, { errorPolicy: 'all' });
    this.deviceQLSub = this.deviceQL$.subscribe((result) => {
      this.device = result.data.device;
      console.log(
        '%cdevice.component.ts line:22 result.data.device.mac',
        'color: #007acc;',
        this.device.mac
      );
    });
  }
  ngOnDestroy() {
    this.deviceQLSub.unsubscribe();
  }
}
