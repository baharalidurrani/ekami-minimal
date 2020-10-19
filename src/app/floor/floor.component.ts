import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FloorGQL, FloorType } from '../../generated/graphql';
import { GqlCacheService } from '../gql-cache.service';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css'],
})
export class FloorComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private floorQL: FloorGQL,
    private gc: GqlCacheService
  ) {}

  floorSub: Subscription;
  floor: FloorType;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log('%cfloor.component.ts line:14 floor ID', 'color: #007acc;', id);
    this.gc.floor$ = this.floorQL.fetch({ id });
    this.floorSub = this.gc.floor$.subscribe((f) => {
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
