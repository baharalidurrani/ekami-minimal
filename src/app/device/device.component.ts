import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { SubscriptionResult } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import {
  DeviceGQL,
  DeviceQuery,
  DeviceType,
  GetDeviceLatestResultGQL,
  GetDeviceLatestResultQuery,
  PowerCommandGQL,
  PowerCommandQuery,
  ThingLogNotificationGQL,
  ThingLogNotificationSubscription,
  ThingLogResultType,
  ThingResultNotificationGQL,
  ThingResultNotificationSubscription,
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
    private logNotificationQL: ThingLogNotificationGQL,
    private powerCmd: PowerCommandGQL,
    private resultNotificationQL: ThingResultNotificationGQL,
    private latestResult: GetDeviceLatestResultGQL
  ) {}

  @Input() device: DeviceType;
  deviceQLSub: Subscription;
  deviceQL$: Observable<ApolloQueryResult<DeviceQuery>>;

  powerState: string;
  latestResult$: Observable<ApolloQueryResult<GetDeviceLatestResultQuery>>;
  latestResultSub: Subscription;

  powerCmd$: Observable<ApolloQueryResult<PowerCommandQuery>>;
  powerCmdSub: Subscription;

  liveLog: ThingLogResultType;
  logNotificationQL$: Observable<
    SubscriptionResult<ThingLogNotificationSubscription>
  >;
  logNotificationSub: Subscription;

  resultNotification$: Observable<
    SubscriptionResult<ThingResultNotificationSubscription>
  >;
  resultNotificationSub: Subscription;

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

    this.latestResult$ = this.latestResult.fetch({
      mac: this.device ? this.device.mac : mac,
    });
    this.latestResultSub = this.latestResult$.subscribe((result) => {
      this.powerState = JSON.parse(
        result.data.getDeviceLatestResult[0].payload
      ).POWER;
    });

    this.subscribeLive();

    this.resultNotification$ = this.resultNotificationQL.subscribe({
      macs: [this.device ? this.device.mac : mac],
    });

    this.resultNotificationSub = this.resultNotification$.subscribe(
      (result) => {
        this.powerState = JSON.parse(
          result.data.thingResultNotification.payloadJson
        ).POWER;
      }
    );
  }

  sendPowerCommand({ target }: { target: HTMLButtonElement }) {
    target.disabled = true;
    this.powerState = this.liveLog?.state.POWER;
    const sendCommand = this.powerState === 'ON' ? 'OFF' : 'ON';
    console.log(
      '%cdevice.component.ts line:75 sending Command',
      'color: #007acc;',
      sendCommand
    );
    if (this.logNotificationSub) this.logNotificationSub.unsubscribe();
    setTimeout(() => {
      this.subscribeLive();
      target.disabled = false;
    }, 5 * 1000);
    this.powerCmd$ = this.powerCmd.fetch(
      {
        command: sendCommand,
        commandType: 'power',
        mac: this.device.mac,
      },
      { fetchPolicy: 'network-only' }
    );
    this.powerCmdSub = this.powerCmd$.subscribe((d) => {
      console.log(
        '%cdevice.component.ts line:85 command published on device',
        'color: #007acc;',
        d.data.powerCommand.mqtt_topic
      );
    });
  }

  subscribeLive() {
    this.logNotificationQL$ = this.logNotificationQL.subscribe({
      macs: [this.device ? this.device.mac : this.route.snapshot.params['mac']],
    });
    this.logNotificationSub = this.logNotificationQL$.subscribe((log) => {
      this.liveLog = log.data.thingLogNotification;
      this.powerState = log.data.thingLogNotification?.state?.POWER;
    });
  }

  ngOnDestroy() {
    if (this.deviceQLSub) this.deviceQLSub.unsubscribe();
    if (this.logNotificationSub) this.logNotificationSub.unsubscribe();
    if (this.resultNotificationSub) this.resultNotificationSub.unsubscribe();
    if (this.latestResultSub) this.latestResultSub.unsubscribe();
    if (this.powerCmdSub) this.powerCmdSub.unsubscribe();
  }
}
