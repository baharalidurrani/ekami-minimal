import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import {
  DeleteZoneGQL,
  FloorGQL,
  FloorQuery,
  FloorType,
  ZoneType,
} from '../../generated/graphql';
import { AddZoneComponent } from '../add-zone/add-zone.component';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css'],
})
export class FloorComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private floorQL: FloorGQL,
    private dialog: MatDialog,
    private deleteZoneQL: DeleteZoneGQL
  ) {}

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
      this.fetchFloor(id);
    }
  }

  private fetchFloor(id: string, refresh?: boolean) {
    this.floor$ = refresh
      ? this.floorQL.fetch({ id }, { fetchPolicy: 'network-only' })
      : this.floorQL.fetch({ id });

    if (this.floorSub) this.floorSub.unsubscribe();
    this.floorSub = this.floor$.subscribe((f) => {
      this.floor = f.data.floor;
    });
  }

  expandZone(zone: ZoneType) {
    if (this.selectedZone) this.selectedZone = null;
    else this.selectedZone = zone;
  }

  addZone() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.floor.id;

    const dialogRef = this.dialog.open(AddZoneComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((success) => {
      if (success) this.fetchFloor(this.floor.id, true);
    });
  }

  deleteZone(id) {
    console.log('delete zone id', id);
    const delSub = this.deleteZoneQL.fetch({ id }).subscribe((r) => {
      this.fetchFloor(this.floor.id, true);
      if (this.selectedZone?.id === id) this.selectedZone = null;
      delSub.unsubscribe();
    });
  }

  ngOnDestroy() {
    if (this.floorSub) this.floorSub.unsubscribe();
  }
}
