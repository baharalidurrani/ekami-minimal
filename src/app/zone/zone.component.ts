import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import {
  DeviceType,
  ZoneGQL,
  ZoneQuery,
  ZoneType,
} from '../../generated/graphql';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
})
export class ZoneComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private zoneQL: ZoneGQL) {}

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
        console.log(
          '%czone.component.ts line:25 zone',
          'color: #007acc;',
          this.zone
        );
      });
    }
  }

  expandDevice(device: DeviceType) {
    if (this.selectedDevice) this.selectedDevice = null;
    else this.selectedDevice = device;
  }

  ngOnDestroy() {
    if (this.zoneSub) this.zoneSub.unsubscribe();
  }
}
