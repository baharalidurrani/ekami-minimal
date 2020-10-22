import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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

  @Input() device: DeviceType;
  deviceQLSub: Subscription;
  deviceQL$: Observable<ApolloQueryResult<DeviceQuery>>;

  ngOnInit(): void {
    console.log(
      '%cdevice.component.ts line:20 onInit',
      'color: white; background-color: #26bfa5;'
    );
    if (!this.device) {
      const mac: string = this.route.snapshot.params['mac'];
      this.deviceQL$ = this.deviceQL.fetch({ mac }, { errorPolicy: 'all' });
      this.deviceQLSub = this.deviceQL$.subscribe((result) => {
        this.device = result.data.device;
      });
    }
  }

  ngOnDestroy() {
    if (this.deviceQLSub) this.deviceQLSub.unsubscribe();
  }
}
