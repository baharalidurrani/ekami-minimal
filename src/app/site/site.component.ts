import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import {
  FloorType,
  SiteGQL,
  SiteQuery,
  SiteType,
} from '../../generated/graphql';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css'],
})
export class SiteComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private siteQL: SiteGQL) {}

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
      console.log('%csite.component.ts line:14 id', 'color: #007acc;', id);
      this.siteQL$ = this.siteQL.fetch({ id }, { errorPolicy: 'all' });
      this.siteQLSub = this.siteQL$.subscribe((s) => {
        if (s.error || s.errors) throw s.errors;
        this.site = s.data.site;
      });
    }
  }

  expandFloor(floor: FloorType) {
    if (this.selectedFloor) this.selectedFloor = null;
    else this.selectedFloor = floor;
  }

  ngOnDestroy() {
    if (this.siteQLSub) this.siteQLSub.unsubscribe();
  }
}
