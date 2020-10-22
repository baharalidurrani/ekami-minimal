import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import {
  FloorGQL,
  FloorQuery,
  FloorType,
  ZoneType,
} from '../../generated/graphql';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css'],
})
export class FloorComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private floorQL: FloorGQL) {}

  @Input() floor?: FloorType;
  floorSub: Subscription;
  floor$: Observable<ApolloQueryResult<FloorQuery>>;
  selectedZone: ZoneType;

  ngOnInit(): void {
    console.log(
      '%cfloor.component.ts line:26 onInit',
      'color: white; background-color: #26bfa5;'
    );
    if (!this.floor) {
      const id = this.route.snapshot.params['id'];
      this.floor$ = this.floorQL.fetch({ id });
      this.floorSub = this.floor$.subscribe((f) => {
        this.floor = f.data.floor;
        console.log(
          '%cfloor.component.ts line:25 floor',
          'color: #007acc;',
          this.floor
        );
      });
    }
  }

  expandZone(zone: ZoneType) {
    if (this.selectedZone) this.selectedZone = null;
    else this.selectedZone = zone;
  }

  ngOnDestroy() {
    if (this.floorSub) this.floorSub.unsubscribe();
  }
}
