import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import {
  DeviceGQL,
  DeviceQuery,
  DeviceType,
  GetThingsLatestLogsGQL,
  GetThingsLatestLogsQuery,
  ThingLogResultType,
} from '../../generated/graphql';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
})
export class DeviceComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private deviceQL: DeviceGQL,
    private latestLogsQL: GetThingsLatestLogsGQL
  ) {}

  @Input() device: DeviceType;
  latestLog$: Observable<ApolloQueryResult<GetThingsLatestLogsQuery>>;
  latestLogSub: Subscription;
  latestLog: ThingLogResultType;
  deviceQLSub: Subscription;
  deviceQL$: Observable<ApolloQueryResult<DeviceQuery>>;

  ngOnInit(): void {
    console.log(
      '%cdevice.component.ts line:20 onInit',
      'color: white; background-color: #26bfa5;'
    );
    const mac = this.route.snapshot.params['mac'];
    if (!this.device) {
      this.deviceQL$ = this.deviceQL.fetch({ mac }, { errorPolicy: 'all' });
      this.deviceQLSub = this.deviceQL$.subscribe((result) => {
        this.device = result.data.device;
      });
    }

    this.latestLog$ = this.latestLogsQL.fetch({
      macs: [this.device ? this.device.mac : mac],
    });
    this.latestLogSub = this.latestLog$.subscribe((logs) => {
      this.latestLog = logs.data.getThingsLatestLogs[0];
      console.log(
        '%cdevice.component.ts line:50 this.latestLog',
        'color: #007acc;',
        this.latestLog
      );
    });
  }

  ngOnDestroy() {
    if (this.deviceQLSub) this.deviceQLSub.unsubscribe();
  }
}
