import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import { FloorGQL, FloorQuery, FloorType } from '../../generated/graphql';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css'],
})
export class FloorComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private floorQL: FloorGQL) {}

  floorSub: Subscription;
  floor: FloorType;
  floor$: Observable<ApolloQueryResult<FloorQuery>>;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log('%cfloor.component.ts line:14 floor ID', 'color: #007acc;', id);
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
  ngOnDestroy() {
    this.floorSub.unsubscribe();
  }
}
