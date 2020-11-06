import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import {
  FloorType,
  SiteGQL,
  SiteQuery,
  SiteType,
} from '../../generated/graphql';
import { AddFloorComponent } from '../add-floor/add-floor.component';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css'],
})
export class SiteComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private siteQL: SiteGQL,
    private dialog: MatDialog
  ) {}

  @Input() site?: SiteType;
  siteQLSub: Subscription;
  siteQL$: Observable<ApolloQueryResult<SiteQuery>>;
  selectedFloor: FloorType;

  ngOnInit(): void {
    console.log(
      '%csite.component.ts line:26 onInit',
      'color: white; background-color: #26bfa5;'
    );
    if (!this.site) {
      const id = this.route.snapshot.params['id'];
      this.fetchSite(id);
    }
  }

  private fetchSite(id: string, refresh?: boolean) {
    this.siteQL$ = refresh
      ? this.siteQL.fetch(
          { id },
          { errorPolicy: 'all', fetchPolicy: 'network-only' }
        )
      : this.siteQL.fetch({ id }, { errorPolicy: 'all' });

    if (this.siteQLSub) this.siteQLSub.unsubscribe();
    this.siteQLSub = this.siteQL$.subscribe((s) => {
      if (s.error || s.errors) throw s.errors;
      this.site = s.data.site;
    });
  }

  expandFloor(floor: FloorType) {
    if (this.selectedFloor) this.selectedFloor = null;
    else this.selectedFloor = floor;
  }

  addFloor() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.site.id;

    const dialogRef = this.dialog.open(AddFloorComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((success) => {
      if (success) this.fetchSite(this.site.id, true);
    });
  }

  ngOnDestroy() {
    if (this.siteQLSub) this.siteQLSub.unsubscribe();
  }
}
